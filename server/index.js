import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.route.js";
import aiRoutes from "./routes/ai.route.js";
import { verifyFirebaseToken } from "./middleware/auth.middleware.js";

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

app.use(express.json());

// ── CORS ─────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.startsWith("http://localhost:")) {
      return callback(null, true);
    }
    return callback(new Error("CORS not allowed"), false);
  },
  credentials: true
}));

// ── MongoDB — retry on failure (no hard crash) ────────────
const connectDB = async () => {
  if (!MONGO_URL) {
    console.error("❌ MONGO_URI is not set in .env — MongoDB will not connect.");
    return;
  }
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    if (err.code === "ENOTFOUND") {
      console.error("   → DNS lookup failed. Check:");
      console.error("     1. MongoDB Atlas → Network Access → Add your current IP (or 0.0.0.0/0 for dev)");
      console.error("     2. That your internet connection is active");
      console.error("     3. Visit: https://cloud.mongodb.com — verify the cluster is running");
    }
    console.log("🔁 Retrying MongoDB connection in 5 seconds...");
    setTimeout(connectDB, 5000);
  }
};

connectDB();

// ── Routes ───────────────────────────────────────────────
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/ai", aiRoutes);

// Protected test route
app.get("/api/v1/auth/test", verifyFirebaseToken, (req, res) => {
  return res.json({ ok: true, uid: req.user.uid, email: req.user.email });
});

// Health check — also shows DB status
app.get("/", (req, res) =>
  res.json({
    message: "HealthQ.Fit API running",
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  })
);

// ── Global error handler ─────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message || err);
  res.status(500).json({ error: "Something went wrong" });
});

// ── Start server ─────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
