// src/firebase/config.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAv76IgMuM80gOmrGMedq7VVDNQHSLHMxs",
//   authDomain: "health-n-hacks.firebaseapp.com",
//   projectId: "health-n-hacks",
//   storageBucket: "health-n-hacks.firebasestorage.app",
//   messagingSenderId: "1002610149923",
//   appId: "1:1002610149923:web:c25043ff586ef3db117f96",
//   measurementId: "G-4V7GD2ZJWD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Auth + Google Provider
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// export default app;


// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
