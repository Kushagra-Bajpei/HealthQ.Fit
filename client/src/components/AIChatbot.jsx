import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm Dr. Arun's AI health assistant. Ask me about diet tips, meal suggestions, or nutrition advice!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_BASE}/api/v1/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get response");
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: error.message }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple plain-text formatter (no react-markdown to avoid crashes)
  const formatMessage = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <p key={i} className="font-bold text-gray-900 mt-2">{line.replace("## ", "")}</p>;
      if (line.startsWith("# ")) return <p key={i} className="font-bold text-gray-900 mt-2 text-base">{line.replace("# ", "")}</p>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold">{line.replace(/\*\*/g, "")}</p>;
      if (line.startsWith("- ") || line.startsWith("* ")) return <p key={i} className="pl-2">• {line.slice(2)}</p>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center"
            title="Chat with AI Health Assistant"
          >
            <MessageCircle size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 right-0 w-80 sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">HealthQ AI Assistant</h3>
                  <p className="text-xs text-green-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition p-1">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === "user" ? "bg-green-100" : "bg-gray-200"}`}>
                      {msg.role === "user" ? <User size={12} className="text-green-600" /> : <Bot size={12} className="text-gray-600" />}
                    </div>
                    <div className={`px-3 py-2.5 rounded-xl text-sm leading-relaxed ${msg.role === "user" ? "bg-green-500 text-white rounded-br-none" : "bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm"}`}>
                      {msg.role === "ai" ? (
                        <div className="space-y-0.5">{formatMessage(msg.text)}</div>
                      ) : (
                        <span>{msg.text}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-xl rounded-bl-none shadow-sm flex gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent transition"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about diet or health..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="text-green-500 hover:text-green-600 disabled:opacity-40 transition p-1"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
