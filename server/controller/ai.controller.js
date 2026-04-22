import Groq from "groq-sdk";

export const chatWithBotanist = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey.trim() === "") {
      console.error("❌ GROQ_API_KEY is not set. Add your key to server/.env");
      return res.status(500).json({
        error: "AI service is not configured. Please contact the administrator."
      });
    }

    const groq = new Groq({
      apiKey: apiKey.trim()
    });

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
- Do NOT provide diagnosis or replace medical advice`;

    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt.trim() }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const text = response.choices[0]?.message?.content || "";

    console.log("✅ AI response generated (Groq) for prompt:", prompt.substring(0, 50));
    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("❌ Groq AI Error:", error.message || error);

    if (error.status === 401) {
      return res.status(500).json({ error: "Invalid Groq API key. Please check your GROQ_API_KEY." });
    }
    
    if (error.status === 400 || error.status === 402 || error.status === 403) {
      return res.status(400).json({ error: `Billing or Authorization error: ${error.message}` });
    }

    res.status(500).json({ error: error.message || "Failed to generate AI response. Please try again later." });
  }
};
