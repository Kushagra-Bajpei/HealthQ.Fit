import React from 'react';
import { motion } from 'framer-motion';
import MealRecommendation from '../components/MealRecommendation';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-green-100 p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">Dashboard & Overview 🥗</h1>
          <p className="text-gray-500 text-lg">Here's your health summary for today.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-semibold text-lg mb-2">Daily Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 rounded text-green-800" />
                <span>Drink 2L Water</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 rounded text-green-800" />
                <span>10,000 Steps</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 rounded text-green-800" />
                <span>Protein Shake</span>
              </li>
            </ul>
          </motion.div>

          {/* Placeholder for more dashboard widgets */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:col-span-2"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-4">Weight Progress</h3>
            <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200">
              <span className="text-gray-400">Chart Visualization Coming Soon</span>
            </div>
          </motion.div>
          
          <MealRecommendation />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
