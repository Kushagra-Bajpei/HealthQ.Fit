// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import contactRoutes from "./routes/contact.route.js";
// import { verifyFirebaseToken } from "./middleware/auth.middleware.js";

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 5000;
// const MONGO_URL = process.env.MONGO_URI;

// app.use(express.json());

// // Add your frontend URLs here
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://health-q-fit.vercel.app"
// ];


// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) return callback(null, true);
//     return callback(new Error("CORS not allowed"), false);
//   },
//   credentials: true
// }));

// // Connect to MongoDB
// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1);
//   });

// // Routes
// app.use("/api/v1/contact", contactRoutes);

// // Simple protected test route to verify token works
// app.get("/api/v1/auth/test", verifyFirebaseToken, (req, res) => {
//   return res.json({ ok: true, uid: req.user.uid, email: req.user.email });
// });

// // Health check
// app.get("/", (req, res) => res.json({ message: "Health N Hacks API running" }));

// // Error handler
// app.use((err, req, res, next) => {
//   console.error("Server Error:", err.message || err);
//   res.status(500).json({ error: "Something went wrong" });
// });

// app.listen(port, () => console.log(`🚀 Server listening on port ${port}`));





import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.route.js";
import { verifyFirebaseToken } from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

app.use(express.json());

// ✅ CORS FIX
app.use(cors({
  origin: true,
  credentials: true
}));

// Connect MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/v1/contact", contactRoutes);

app.get("/api/v1/auth/test", verifyFirebaseToken, (req, res) => {
  return res.json({ ok: true, uid: req.user.uid, email: req.user.email });
});

app.get("/", (req, res) =>
  res.json({ message: "Health N Hacks API running" })
);

// Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message || err);
  res.status(500).json({ error: "Something went wrong" });
});

export default app;

