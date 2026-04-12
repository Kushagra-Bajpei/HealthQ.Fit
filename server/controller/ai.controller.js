import { GoogleGenerativeAI } from "@google/generative-ai";

export const chatWithBotanist = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Guard: Check key exists and is not the placeholder
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE" || apiKey.trim() === "") {
      console.error("❌ GEMINI_API_KEY is not set. Add your key to server/.env");
      return res.status(500).json({
        error: "AI service is not configured. Please contact the administrator."
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey.trim());

    // Use gemini-1.5-flash (stable, fast, free tier available)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are a professional AI health assistant for Dr. Arun Sharma's nutrition clinic, HealthQ.Fit.
Your role is to:
- Answer diet and nutrition questions concisely
- Suggest healthy meals and snacks
- Provide general wellness advice
- Always recommend booking a consultation for serious medical conditions

Rules:
- Keep responses short and to the point (max 200 words)
- Use clear formatting with bullet points when listing items
- Be warm, professional, and encouraging
- Do NOT provide diagnosis or replace medical advice

User question: ${prompt.trim()}`;

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    console.log("✅ AI response generated for prompt:", prompt.substring(0, 50));
    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("❌ AI Chat Error:", error.message || error);

    // Provide helpful error messages
    if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("API key not valid")) {
      return res.status(500).json({ error: "Invalid Gemini API key. Please update your GEMINI_API_KEY in server/.env" });
    }
    if (error.message?.includes("PERMISSION_DENIED")) {
      return res.status(500).json({ error: "Gemini API permission denied. Check your API key permissions." });
    }
    if (error.message?.includes("quota")) {
      return res.status(429).json({ error: "API quota exceeded. Please try again later." });
    }

    res.status(500).json({ error: "Failed to generate AI response. Please try again later." });
  }
};
