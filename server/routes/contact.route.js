// routes/contact.route.js
import express from "express";
import { sendMessage } from "../controller/contact.controller.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected submit endpoint
router.post("/submit", verifyFirebaseToken, sendMessage);

export default router;
