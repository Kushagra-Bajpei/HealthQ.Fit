// middleware/auth.middleware.js
// import admin from "firebase-admin";
// import fs from "fs";
// import path from "path";

// // Path to your serviceAccountKey.json
// const keyPath = path.join(process.cwd(), "serviceAccountKey.json");

// // Initialize Firebase Admin only once
// if (!admin.apps.length) {
//   if (!fs.existsSync(keyPath)) {
//     console.warn("serviceAccountKey.json not found in backend root - Firebase Admin not initialized");
//   } else {
//     const raw = fs.readFileSync(keyPath, "utf8");
//     const serviceAccount = JSON.parse(raw);
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     });
//   }
// }

// /**
//  * Middleware to verify Firebase ID Token
//  * Expects: Authorization: Bearer <idToken>
//  */
// export const verifyFirebaseToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization || "";
//   if (!authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized: No token provided" });
//   }

//   const idToken = authHeader.split(" ")[1];

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedToken; // user info (uid, email, etc.)
//     next();
//   } catch (error) {
//     console.error("Firebase token verification failed:", error.message || error);
//     res.status(403).json({ error: "Invalid or expired token" });
//   }
// };


import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

if (!admin.apps.length) {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    console.warn("⚠️ FIREBASE_SERVICE_ACCOUNT not found in environment variables");
  } else {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase Admin initialized from .env");
  }
}

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }
  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Firebase token verification failed:", error.message || error);
    res.status(403).json({ error: "Invalid or expired token" });
  }
};
