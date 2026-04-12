import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, PlayCircle } from 'lucide-react';

const SuccessStories = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Weight Loss', 'Diabetes Reversal', 'Fitness & Muscle'];

  const stories = [
    {
      id: 1,
      name: 'Michael T.',
      category: 'Weight Loss',
      result: '-35 lbs in 6 months',
      quote: 'Dr. Arun provided a roadmap that was actually sustainable. I never felt starved.',
      before: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1583465584525-4c07d39ccf6e?q=80&w=400&fit=crop'
    },
    {
      id: 2,
      name: 'Priya S.',
      category: 'Diabetes Reversal',
      result: 'HbA1c from 8.5 to 5.4',
      quote: 'The metabolic reset protocol completely changed my life. I am no longer dependent on daily insulin.',
      before: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&fit=crop'
    },
    {
      id: 3,
      name: 'James L.',
      category: 'Fitness & Muscle',
      result: '+12 lbs lean mass',
      quote: 'Sports nutrition is pure science. The macro cycling recommended by the team helped me peak perfectly.',
      before: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&fit=crop'
    }
  ];

  const filteredStories = filter === 'All' ? stories : stories.filter(s => s.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Patient Transformations</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Clinical results from actual patients following precise, biometric-driven protocols.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                filter === cat 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter === cat && <CheckCircle size={16} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredStories.map(story => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
              >
                {/* Before / After Images */}
                <div className="relative h-64 flex">
                  <div className="w-1/2 relative group-hover:brightness-110 transition">
                    <img src={story.before} alt="Before" className="w-full h-full object-cover grayscale" />
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-bold backdrop-blur-sm">Before</div>
                  </div>
                  <div className="w-[2px] bg-white absolute left-1/2 top-0 bottom-0 z-10 hidden group-hover:block" />
                  <div className="w-1/2 relative group-hover:brightness-110 transition">
                    <img src={story.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-bold shadow-md">After</div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200 shadow-sm">
                    {story.category}
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm font-bold text-green-600 mb-4">{story.result}</p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStories;

const CheckCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
