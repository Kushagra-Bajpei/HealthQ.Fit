import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Lock, Star, Leaf, Dumbbell, Heart } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Fat Loss Protocol',
    type: 'Weight Management',
    icon: '🔥',
    color: 'from-orange-500 to-red-500',
    status: 'active',
    progress: 68,
    duration: '12 Weeks',
    week: 'Week 8 of 12',
    description: 'A clinically designed plan combining caloric deficit, macro cycling, and strategic meal timing to maximize fat loss while preserving muscle.',
    meals: [
      { time: '7:00 AM', name: 'Breakfast', items: 'Overnight oats with chia seeds, berries & almond milk', kcal: '320 kcal' },
      { time: '10:30 AM', name: 'Morning Snack', items: 'Apple + 15g almond butter', kcal: '185 kcal' },
      { time: '1:00 PM', name: 'Lunch', items: 'Grilled chicken salad with quinoa, lemon dressing', kcal: '480 kcal' },
      { time: '4:00 PM', name: 'Evening Snack', items: '1 cup Greek yoghurt + walnuts', kcal: '220 kcal' },
      { time: '7:30 PM', name: 'Dinner', items: 'Baked salmon, steamed broccoli, sweet potato', kcal: '520 kcal' },
    ]
  },
  {
    id: 2,
    name: 'Diabetes Reversal',
    type: 'Metabolic Health',
    icon: '💉',
    color: 'from-blue-500 to-cyan-500',
    status: 'upcoming',
    progress: 0,
    duration: '16 Weeks',
    week: 'Starts Next Monday',
    description: 'Evidence-based low-glycemic dietary framework shown to reduce HbA1c levels and improve insulin sensitivity.',
    meals: []
  },
  {
    id: 3,
    name: 'Performance Nutrition',
    type: 'Fitness & Muscle',
    icon: '⚡',
    color: 'from-purple-500 to-violet-600',
    status: 'locked',
    progress: 0,
    duration: '8 Weeks',
    week: 'Complete Fat Loss Protocol first',
    description: 'Advanced sports nutrition protocol for muscle hypertrophy, recovery optimization, and peak physical output.',
    meals: []
  },
];

const PlanCard = ({ plan }) => {
  const [expanded, setExpanded] = useState(false);
  const isActive = plan.status === 'active';
  const isLocked = plan.status === 'locked';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
        isActive ? 'border-green-200 shadow-green-100' : 'border-gray-100'
      } ${isLocked ? 'opacity-70' : ''}`}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${plan.color} p-5 text-white relative`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{plan.icon}</span>
            <div>
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-white/80 text-sm">{plan.type} · {plan.duration}</p>
            </div>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            isActive ? 'bg-white/30 text-white' :
            isLocked ? 'bg-black/20 text-white/80' :
            'bg-white/20 text-white'
          }`}>
            {isActive ? '● Active' : isLocked ? '🔒 Locked' : '⏳ Upcoming'}
          </span>
        </div>

        {isActive && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-white/80 mb-1.5">
              <span>{plan.week}</span>
              <span>{plan.progress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${plan.progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{plan.description}</p>

        {isActive && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-green-600 font-semibold text-sm hover:text-green-700 transition"
          >
            {expanded ? <><ChevronUp size={16} /> Hide Today's Meals</> : <><ChevronDown size={16} /> View Today's Meal Plan</>}
          </button>
        )}

        {isLocked && (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Lock size={14} />
            <span>{plan.week}</span>
          </div>
        )}

        {!isActive && !isLocked && (
          <div className="flex items-center gap-2 text-blue-500 text-sm font-medium">
            <Clock size={14} />
            <span>{plan.week}</span>
          </div>
        )}

        {/* Expanded Meals */}
        {expanded && isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-3 border-t border-gray-100 pt-4"
          >
            {plan.meals.map((meal, i) => (
              <div key={i} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="text-center min-w-[60px]">
                  <p className="text-[10px] text-gray-400 font-medium uppercase">Time</p>
                  <p className="text-xs font-bold text-gray-700">{meal.time}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-green-600 mb-0.5">{meal.name}</p>
                  <p className="text-sm text-gray-700 leading-snug">{meal.items}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                  {meal.kcal}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const MyPlans = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-3">
            Personalized Plans
          </span>
          <h1 className="text-3xl font-black text-gray-900">My Nutrition Plans</h1>
          <p className="text-gray-500 mt-2">Your clinical nutrition roadmap, curated by Dr. Arun Sharma.</p>
        </motion.div>

        {/* Summary pills */}
        <div className="flex flex-wrap gap-3">
          {[
            { icon: CheckCircle, label: '1 Active Plan', color: 'text-green-600 bg-green-50 border-green-200' },
            { icon: Clock, label: '1 Upcoming', color: 'text-blue-600 bg-blue-50 border-blue-200' },
            { icon: Star, label: '3 Plans Total', color: 'text-purple-600 bg-purple-50 border-purple-200' },
          ].map(({ icon: Icon, label, color }, i) => (
            <div key={i} className={`flex items-center gap-2 border px-3 py-2 rounded-xl text-sm font-semibold ${color}`}>
              <Icon size={14} />
              {label}
            </div>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="space-y-5">
          {plans.map(plan => <PlanCard key={plan.id} plan={plan} />)}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">Need a Custom Plan?</h3>
            <p className="text-gray-400 text-sm">Book a 1-on-1 session with Dr. Arun for a fully personalised protocol.</p>
          </div>
          <a href="/contact" className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20 text-sm whitespace-nowrap">
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPlans;
