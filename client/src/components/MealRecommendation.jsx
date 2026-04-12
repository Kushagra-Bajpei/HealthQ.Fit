import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wand2, Leaf } from 'lucide-react';

const MealRecommendation = () => {
  const [goal, setGoal] = useState('');
  const [dietary, setDietary] = useState('none');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    setResult(null);
    setError('');

    try {
      const prompt = `You are Dr. Arun Sharma's AI Clinical Nutritionist. Generate a structured 1-day meal plan for someone with the goal: "${goal}". Dietary preference: "${dietary}". Format with clear sections: Breakfast, Morning Snack, Lunch, Evening Snack, Dinner. Keep each meal concise with 2-3 items. End with a brief nutrition tip.`;
      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_BASE}/api/v1/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate plan");
      setResult(data.reply);
    } catch (err) {
      setError(err.message || "Failed to generate meal plan. Please check AI configuration.");
    } finally {
      setLoading(false);
    }
  };

  // Simple text renderer - no react-markdown
  const renderResult = (text) => {
    return text.split("\n").map((line, i) => {
      if (!line.trim()) return <div key={i} className="h-2" />;
      if (line.startsWith("## ") || line.startsWith("### ")) {
        const heading = line.replace(/^#{2,3} /, '');
        return <h4 key={i} className="font-bold text-green-800 mt-4 mb-1.5 text-sm uppercase tracking-wide">{heading}</h4>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="font-bold text-gray-900 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <div key={i} className="flex items-start gap-2 ml-1 mb-1">
            <span className="text-green-500 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-sm">{line.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}</span>
          </div>
        );
      }
      return <p key={i} className="text-gray-700 text-sm">{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 col-span-1 md:col-span-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-2.5 rounded-xl">
          <Wand2 size={20} className="text-green-600" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">AI Meal Plan Generator</h3>
          <p className="text-sm text-gray-500">Powered by Gemini AI</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Your Goal</label>
          <input
            type="text"
            placeholder="e.g. Lose fat, build muscle, manage diabetes..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-sm text-gray-900 transition"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
        </div>
        <div className="sm:w-44">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Diet Type</label>
          <select
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-sm transition"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          >
            <option value="none">No restriction</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="keto">Keto</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            disabled={!goal.trim() || loading}
            onClick={handleGenerate}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-sm text-sm"
          >
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Generating...</span>
            ) : (
              <><Utensils size={16} /><span>Generate Plan</span></>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {error}
        </div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-green-50 border border-green-100 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-100">
            <Leaf size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-800">Your Personalized Meal Plan</span>
          </div>
          <div className="leading-relaxed">{renderResult(result)}</div>
        </motion.div>
      )}
    </div>
  );
};

export default MealRecommendation;
