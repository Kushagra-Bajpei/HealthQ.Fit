import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { TrendingDown, Scale, Droplets, Flame, Target, Plus, ChevronRight } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', weight: 84.2, calories: 1750, water: 2.2 },
  { day: 'Tue', weight: 83.9, calories: 1820, water: 2.0 },
  { day: 'Wed', weight: 83.7, calories: 1680, water: 2.5 },
  { day: 'Thu', weight: 84.0, calories: 1900, water: 1.8 },
  { day: 'Fri', weight: 83.5, calories: 1720, water: 2.3 },
  { day: 'Sat', weight: 83.3, calories: 1650, water: 2.6 },
  { day: 'Sun', weight: 83.1, calories: 1800, water: 2.4 },
];

const milestones = [
  { label: 'Started Journey', date: 'Jan 15, 2026', kg: '91.2 kg', done: true },
  { label: 'Lost First 5kg', date: 'Feb 3, 2026', kg: '86.2 kg', done: true },
  { label: 'Crossed 80kg Goal', date: 'Target: Apr 30', kg: '80.0 kg', done: false },
  { label: 'Maintenance Phase', date: 'Target: May 20', kg: '78.0 kg', done: false },
];

const MiniBar = ({ value, max, color }) => (
  <div className="flex-1 h-full flex items-end">
    <div className="w-full bg-gray-100 rounded-t-md relative" style={{ height: '100%' }}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${(value / max) * 100}%` }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${color} rounded-t-md absolute bottom-0 w-full`}
      />
    </div>
  </div>
);

const Progress = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('weight');

  const startWeight = 91.2;
  const currentWeight = 83.1;
  const targetWeight = 75.0;
  const lost = (startWeight - currentWeight).toFixed(1);
  const remaining = (currentWeight - targetWeight).toFixed(1);
  const pct = Math.round(((startWeight - currentWeight) / (startWeight - targetWeight)) * 100);

  const maxWeight = Math.max(...weeklyData.map(d => d.weight));
  const minWeight = Math.min(...weeklyData.map(d => d.weight));

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-3">
            Health Tracking
          </span>
          <h1 className="text-3xl font-black text-gray-900">My Progress</h1>
          <p className="text-gray-500 mt-2">Track your transformation journey with Dr. Arun's protocol.</p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Scale, label: 'Current Weight', value: `${currentWeight} kg`, color: 'text-blue-600 bg-blue-50' },
            { icon: TrendingDown, label: 'Total Lost', value: `${lost} kg`, color: 'text-green-600 bg-green-50' },
            { icon: Target, label: 'Remaining', value: `${remaining} kg`, color: 'text-orange-600 bg-orange-50' },
            { icon: Flame, label: 'Goal Progress', value: `${pct}%`, color: 'text-purple-600 bg-purple-50' },
          ].map(({ icon: Icon, label, value, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-black text-gray-900">{value}</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar to goal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-bold text-gray-900">Journey to Goal</h3>
              <p className="text-sm text-gray-500">Start: {startWeight}kg → Target: {targetWeight}kg</p>
            </div>
            <span className="text-2xl font-black text-green-600">{pct}%</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full relative"
            >
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white font-bold">{pct}%</span>
            </motion.div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            <span>91.2 kg (Start)</span>
            <span className="text-green-600 font-bold">83.1 kg (Now)</span>
            <span>75.0 kg (Goal)</span>
          </div>
        </motion.div>

        {/* Weekly Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          {/* Tabs */}
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-bold text-gray-900 mr-2">This Week</h3>
            {['weight', 'calories', 'water'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab === 'water' ? '💧 Water' : tab === 'calories' ? '🔥 Calories' : '⚖️ Weight'}
              </button>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="flex gap-2 h-36 items-end">
            {weeklyData.map((d, i) => {
              const val = activeTab === 'weight' ? d.weight : activeTab === 'calories' ? d.calories : d.water;
              const maxVal = activeTab === 'weight' ? maxWeight : activeTab === 'calories' ? 2000 : 3;
              const colors = { weight: 'bg-blue-400', calories: 'bg-orange-400', water: 'bg-cyan-400' };
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <span className="text-[10px] text-gray-500 font-medium">{val}{activeTab === 'water' ? 'L' : activeTab === 'calories' ? '' : ''}</span>
                  <div className="w-full flex-1 flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(val / maxVal) * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className={`w-full ${colors[activeTab]} rounded-t-lg min-h-[4px]`}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{d.day}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          <h3 className="font-bold text-gray-900 mb-5">Milestones</h3>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-4 pb-5 relative">
                {/* Timeline line */}
                {i < milestones.length - 1 && (
                  <div className={`absolute left-5 top-10 bottom-0 w-0.5 ${m.done ? 'bg-green-200' : 'bg-gray-100'}`} />
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                  m.done ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {m.done ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="w-3 h-3 rounded-full border-2 border-gray-300" />
                  )}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${m.done ? 'text-gray-900' : 'text-gray-400'}`}>{m.label}</p>
                  <p className="text-xs text-gray-400">{m.date} · <span className="font-medium">{m.kg}</span></p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Log Entry CTA */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-green-500/20 transition">
            <Plus size={18} />
            Log Today's Weight & Meals
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
