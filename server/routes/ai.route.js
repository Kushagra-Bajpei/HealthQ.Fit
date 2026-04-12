import express from "express";
import { chatWithBotanist } from "../controller/ai.controller.js";

const router = express.Router();

router.post("/chat", chatWithBotanist);

export default router;
