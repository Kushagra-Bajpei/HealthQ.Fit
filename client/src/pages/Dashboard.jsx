import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import MealRecommendation from '../components/MealRecommendation';
import { Activity, Droplets, Moon, Apple, CheckCircle, Circle, TrendingUp, Calendar, Flame, Heart } from 'lucide-react';

const HABITS = [
  { id: 1, icon: Droplets, label: 'Drink 2.5L Water', color: 'text-blue-500' },
  { id: 2, icon: Activity, label: '10,000 Steps', color: 'text-green-500' },
  { id: 3, icon: Apple, label: 'Eat 5 Servings of Veg', color: 'text-orange-500' },
  { id: 4, icon: Moon, label: '7–8 Hours Sleep', color: 'text-purple-500' },
  { id: 5, icon: Flame, label: '30 Min Exercise', color: 'text-red-500' },
  { id: 6, icon: Heart, label: 'No Junk Food Today', color: 'text-pink-500' },
];

const stats = [
  { label: 'Days Active', value: '24', sub: 'This Month', color: 'bg-green-500', icon: Calendar },
  { label: 'Calories Avg', value: '1,840', sub: 'kcal / day', color: 'bg-blue-500', icon: Flame },
  { label: 'Goal Progress', value: '68%', sub: 'Weight target', color: 'bg-purple-500', icon: TrendingUp },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [checked, setChecked] = useState({});

  const toggleHabit = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const completedCount = Object.values(checked).filter(Boolean).length;

  const getUserName = () => user?.displayName?.split(' ')[0] || 'there';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-3xl p-8 shadow-xl shadow-green-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-green-200 font-medium mb-1">{greeting}, 👋</p>
              <h1 className="text-3xl md:text-4xl font-black mb-2">{getUserName()}</h1>
              <p className="text-green-100 text-sm max-w-md">
                You've completed <span className="font-bold text-white">{completedCount} of {HABITS.length}</span> habits today. Keep it up!
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="white" strokeWidth="3"
                    strokeDasharray={`${(completedCount / HABITS.length) * 100} 100`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-black">{Math.round((completedCount / HABITS.length) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5"
            >
              <div className={`${s.color} bg-opacity-10 p-3 rounded-2xl`}>
                <s.icon className={`w-7 h-7 text-white`} style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.2))' }} />
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                <p className="text-xs text-gray-400">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Daily Habits Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg text-gray-900">Daily Habits</h3>
              <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                {completedCount}/{HABITS.length} done
              </span>
            </div>
            <div className="space-y-3">
              {HABITS.map((habit) => (
                <button
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                    checked[habit.id]
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {checked[habit.id]
                    ? <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    : <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  }
                  <habit.icon className={`w-4 h-4 flex-shrink-0 ${habit.color}`} />
                  <span className={`text-sm font-medium ${checked[habit.id] ? 'text-green-700 line-through opacity-70' : 'text-gray-700'}`}>
                    {habit.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Today's Quick Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-5">Weekly Progress Overview</h3>
            <div className="space-y-4">
              {[
                { label: 'Calorie Target', value: 85, color: 'bg-green-500', current: '1,564', target: '1,800 kcal' },
                { label: 'Protein Intake', value: 72, color: 'bg-blue-500', current: '108g', target: '150g / day' },
                { label: 'Hydration', value: 60, color: 'bg-cyan-500', current: '1.5L', target: '2.5L goal' },
                { label: 'Active Minutes', value: 45, color: 'bg-orange-500', current: '27 min', target: '60 min goal' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{item.label}</span>
                    <span className="text-gray-500">{item.current} <span className="text-gray-400">/ {item.target}</span></span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tip of the day */}
            <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-xl">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">💡 Dr. Arun's Tip of the Day</p>
              <p className="text-sm text-green-800">
                Eating a handful of mixed nuts 30 minutes before meals helps regulate hunger hormones and prevents overeating.
              </p>
            </div>
          </motion.div>

          {/* AI Meal Generator */}
          <MealRecommendation />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
