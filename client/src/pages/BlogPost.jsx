import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Complete blog post data with full content for all posts
  const blogPosts = {
    1: {
      title: '5 Natural Ways to Lower Blood Sugar Without Medication',
      excerpt: 'Discover evidence-based strategies to manage your blood sugar levels naturally through diet and lifestyle changes.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Blood Sugar Management</h2>
        <p class="text-gray-700 mb-6">Managing blood sugar levels is crucial for overall health, especially for individuals with diabetes or prediabetes. While medication plays an important role, many natural approaches can significantly improve blood sugar control.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Embrace a Low-Glycemic Diet</h3>
        <p class="text-gray-700 mb-4">Focus on foods that release glucose slowly into your bloodstream. Include plenty of:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Non-starchy vegetables (broccoli, spinach, kale)</li>
          <li>Whole grains (oats, quinoa, brown rice)</li>
          <li>Legumes (lentils, chickpeas, black beans)</li>
          <li>Healthy fats (avocado, nuts, olive oil)</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Regular Physical Activity</h3>
        <p class="text-gray-700 mb-4">Exercise helps your muscles use blood sugar for energy and improves insulin sensitivity. Aim for:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>150 minutes of moderate exercise per week</li>
          <li>Strength training 2-3 times weekly</li>
          <li>Daily walking or light activity</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">3. Stay Hydrated</h3>
        <p class="text-gray-700 mb-6">Drinking enough water helps your kidneys flush out excess sugar through urine. Aim for 8-10 glasses daily, and choose water over sugary beverages.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">4. Manage Stress Levels</h3>
        <p class="text-gray-700 mb-4">Chronic stress can raise blood sugar levels through cortisol production. Practice:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Meditation and deep breathing</li>
          <li>Yoga or tai chi</li>
          <li>Regular relaxation breaks</li>
          <li>Adequate sleep and rest</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">5. Get Quality Sleep</h3>
        <p class="text-gray-700 mb-6">Poor sleep can affect insulin sensitivity and blood sugar control. Aim for 7-9 hours of quality sleep per night and maintain consistent sleep schedules.</p>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <p class="text-green-800 font-medium">Important Note:</p>
          <p class="text-green-700 mt-2">Always consult with your healthcare provider before making significant changes to your diabetes management plan. These natural approaches work best when combined with professional medical advice.</p>
        </div>
      `,
      date: 'January 15, 2024',
      readTime: '7 min read',
      category: 'Diabetes Management',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. Sarah Johnson',
      authorRole: 'Nutrition Specialist'
    },
    2: {
      title: 'The Mediterranean Diet: Your Heart\'s Best Friend',
      excerpt: 'Learn how this time-tested eating pattern can significantly reduce your risk of heart disease and stroke.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Power of Mediterranean Eating</h2>
        <p class="text-gray-700 mb-6">The Mediterranean diet has been extensively studied and proven to significantly reduce the risk of heart disease, stroke, and other chronic conditions. This eating pattern emphasizes whole foods, healthy fats, and balanced nutrition.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Key Components of the Mediterranean Diet</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Abundant fruits and vegetables:</strong> Rich in antioxidants and fiber</li>
          <li><strong>Whole grains:</strong> Provides sustained energy and nutrients</li>
          <li><strong>Healthy fats:</strong> Primarily from olive oil, nuts, and avocados</li>
          <li><strong>Lean proteins:</strong> Especially fish and seafood</li>
          <li><strong>Moderate dairy:</strong> Mainly cheese and yogurt</li>
          <li><strong>Limited red meat:</strong> Focus on plant-based proteins</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Scientific Evidence</h3>
        <p class="text-gray-700 mb-4">Multiple studies show remarkable benefits:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>30% reduction in cardiovascular events</li>
          <li>Improved cholesterol levels</li>
          <li>Better blood pressure control</li>
          <li>Reduced inflammation markers</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Getting Started</h3>
        <p class="text-gray-700 mb-4">Begin with these simple steps:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Replace butter with olive oil in cooking</li>
          <li>Add two servings of fish per week</li>
          <li>Include vegetables in every meal</li>
          <li>Choose whole grains over refined ones</li>
          <li>Enjoy fruits for dessert</li>
        </ul>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p class="text-blue-800 font-medium">Pro Tip:</p>
          <p class="text-blue-700 mt-2">The Mediterranean diet is not just about food - it's also about enjoying meals with family and friends and being physically active, which contributes to its overall health benefits.</p>
        </div>
      `,
      date: 'January 10, 2024',
      readTime: '5 min read',
      category: 'Heart Health',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Michael Chen',
      authorRole: 'Cardiac Nutritionist'
    },
    3: {
      title: 'Breaking the Weight Loss Plateau: Science-Based Solutions',
      excerpt: 'Overcome common weight loss challenges with proven strategies that work for long-term success.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Overcoming Weight Loss Challenges</h2>
        <p class="text-gray-700 mb-6">Weight loss plateaus are a common but frustrating experience for many people on their fitness journey. Understanding why they happen and how to overcome them is key to long-term success.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Why Plateaus Happen</h3>
        <p class="text-gray-700 mb-4">As you lose weight, your body undergoes several changes:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Metabolic adaptation:</strong> Your body requires fewer calories at a lower weight</li>
          <li><strong>Changes in body composition:</strong> Loss of muscle mass can slow metabolism</li>
          <li><strong>Hormonal adjustments:</strong> Leptin and other hormones affect appetite and metabolism</li>
          <li><strong>Behavioral factors:</strong> Unconscious changes in activity or diet</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Strategies to Break Through</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">1. Adjust Your Calorie Intake</h4>
        <p class="text-gray-700 mb-4">Recalculate your calorie needs based on your current weight and activity level. A small reduction of 100-200 calories may be sufficient.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">2. Increase Protein Consumption</h4>
        <p class="text-gray-700 mb-4">Protein helps preserve muscle mass and increases satiety. Aim for 1.6-2.2 grams of protein per kilogram of body weight.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">3. Vary Your Exercise Routine</h4>
        <p class="text-gray-700 mb-4">Incorporate high-intensity interval training (HIIT), strength training, and try new activities to challenge your body differently.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">4. Manage Stress and Sleep</h4>
        <p class="text-gray-700 mb-4">Poor sleep and high stress levels can interfere with weight loss through hormonal changes.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">5. Stay Consistent and Patient</h4>
        <p class="text-gray-700 mb-6">Sometimes plateaus are temporary. Focus on consistency rather than rapid results.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Long-Term Success Strategies</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Focus on sustainable habits rather than quick fixes</li>
          <li>Track non-scale victories (energy levels, clothing fit)</li>
          <li>Practice mindful eating</li>
          <li>Build a support system</li>
          <li>Celebrate small achievements</li>
        </ul>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
          <p class="text-orange-800 font-medium">Remember:</p>
          <p class="text-orange-700 mt-2">Weight loss is not linear. Plateaus are normal and can be overcome with the right strategies and persistence.</p>
        </div>
      `,
      date: 'January 5, 2024',
      readTime: '8 min read',
      category: 'Weight Management',
      image: 'https://images.unsplash.com/photo-1514846316711-8a4a8f4a0143?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. Emily Rodriguez',
      authorRole: 'Exercise Physiologist'
    },
    4: {
      title: 'Essential Supplements Guide: What Really Works',
      excerpt: 'A comprehensive guide to the most important supplements for modern lifestyles and how to choose them wisely.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Navigating the World of Supplements</h2>
        <p class="text-gray-700 mb-6">With countless supplements available, it's crucial to understand which ones are evidence-based and how to incorporate them safely into your health regimen.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Must-Have Supplements for Most Adults</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">1. Vitamin D</h4>
        <p class="text-gray-700 mb-4">Essential for bone health, immune function, and mood regulation. Many people are deficient, especially in winter months.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">2. Omega-3 Fatty Acids</h4>
        <p class="text-gray-700 mb-4">Support brain health, reduce inflammation, and promote heart health. Look for EPA and DHA from fish oil or algae sources.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">3. Magnesium</h4>
        <p class="text-gray-700 mb-4">Involved in over 300 biochemical reactions. Supports muscle function, sleep quality, and stress management.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">4. Probiotics</h4>
        <p class="text-gray-700 mb-4">Maintain gut health, which influences everything from digestion to immune function and mental health.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Choosing Quality Supplements</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Look for third-party testing certifications (USP, NSF)</li>
          <li>Check expiration dates</li>
          <li>Research the manufacturer's reputation</li>
          <li>Consult with healthcare professionals</li>
          <li>Start with lower doses and monitor effects</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">When to Take Supplements</h3>
        <p class="text-gray-700 mb-4">Timing matters for optimal absorption:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Fat-soluble vitamins (A, D, E, K) with meals</li>
          <li>Iron on an empty stomach (unless it causes discomfort)</li>
          <li>Magnesium in the evening for better sleep</li>
          <li>B vitamins in the morning for energy</li>
        </ul>
        
        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
          <p class="text-purple-800 font-medium">Safety First:</p>
          <p class="text-purple-700 mt-2">Always consult with a healthcare provider before starting new supplements, especially if you have existing health conditions or take medications.</p>
        </div>
      `,
      date: 'December 28, 2023',
      readTime: '6 min read',
      category: 'Supplement Guide',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. Lisa Thompson',
      authorRole: 'Clinical Nutritionist'
    },
    5: {
      title: 'Exercise & Nutrition: The Perfect Partnership for Fitness',
      excerpt: 'How to optimize your workouts with proper nutrition timing and choices for maximum results.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Fueling Your Fitness Journey</h2>
        <p class="text-gray-700 mb-6">The combination of proper exercise and strategic nutrition creates a powerful synergy that can accelerate your fitness results and improve overall health.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Pre-Workout Nutrition</h3>
        <p class="text-gray-700 mb-4">What you eat before exercise can significantly impact your performance:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>2-3 hours before:</strong> Balanced meal with carbs, protein, and healthy fats</li>
          <li><strong>30-60 minutes before:</strong> Light snack with easily digestible carbs</li>
          <li><strong>Hydration:</strong> Drink 16-20 oz of water 2-3 hours before exercise</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">During Exercise Fueling</h3>
        <p class="text-gray-700 mb-4">For workouts longer than 60-90 minutes:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>30-60 grams of carbohydrates per hour</li>
          <li>Sports drinks or energy gels for intense sessions</li>
          <li>Continue hydrating with 7-10 oz every 10-20 minutes</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Post-Workout Recovery</h3>
        <p class="text-gray-700 mb-4">The 30-minute "anabolic window" is crucial for recovery:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Protein:</strong> 20-30 grams for muscle repair</li>
          <li><strong>Carbohydrates:</strong> Replenish glycogen stores</li>
          <li><strong>Hydration:</strong> Replace fluids and electrolytes</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Nutrition for Different Exercise Goals</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Weight Loss</h4>
        <p class="text-gray-700 mb-4">Focus on calorie deficit with adequate protein to preserve muscle mass.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Muscle Building</h4>
        <p class="text-gray-700 mb-4">Calorie surplus with emphasis on protein timing and quantity.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Endurance Training</h4>
        <p class="text-gray-700 mb-6">Higher carbohydrate intake to fuel long sessions and support recovery.</p>
        
        <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p class="text-red-800 font-medium">Pro Tip:</p>
          <p class="text-red-700 mt-2">Listen to your body - individual needs vary based on metabolism, exercise intensity, and personal goals. Adjust your nutrition strategy based on how you feel and perform.</p>
        </div>
      `,
      date: 'December 20, 2023',
      readTime: '9 min read',
      category: 'Exercise & Nutrition',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Mark Wilson',
      authorRole: 'Sports Nutritionist'
    },
    6: {
      title: 'Healthy Recipes for Busy Weeknights',
      excerpt: 'Quick, nutritious meals that can be prepared in 30 minutes or less without compromising on health.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Effortless Healthy Eating</h2>
        <p class="text-gray-700 mb-6">Eating healthy doesn't have to be time-consuming. These recipes are designed for busy schedules while delivering maximum nutrition and flavor.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">1. One-Pan Lemon Herb Salmon & Vegetables</h3>
        <p class="text-gray-700 mb-4"><strong>Prep time:</strong> 10 minutes | <strong>Cook time:</strong> 20 minutes</p>
        <p class="text-gray-700 mb-4"><strong>Ingredients:</strong></p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>4 salmon fillets</li>
          <li>2 cups broccoli florets</li>
          <li>1 bell pepper, sliced</li>
          <li>1 zucchini, sliced</li>
          <li>2 tbsp olive oil</li>
          <li>1 lemon, juiced and zested</li>
          <li>2 garlic cloves, minced</li>
          <li>Fresh herbs (dill, parsley)</li>
        </ul>
        <p class="text-gray-700 mb-6"><strong>Instructions:</strong> Arrange vegetables on baking sheet, place salmon on top. Drizzle with olive oil, lemon juice, garlic, and herbs. Bake at 400°F for 15-20 minutes until salmon flakes easily.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Quick Chicken Stir-Fry</h3>
        <p class="text-gray-700 mb-4"><strong>Prep time:</strong> 15 minutes | <strong>Cook time:</strong> 10 minutes</p>
        <p class="text-gray-700 mb-4"><strong>Ingredients:</strong></p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>1 lb chicken breast, cubed</li>
          <li>3 cups mixed vegetables</li>
          <li>2 tbsp coconut oil</li>
          <li>3 tbsp soy sauce (or tamari)</li>
          <li>1 tbsp honey</li>
          <li>1 tsp ginger, grated</li>
          <li>2 garlic cloves, minced</li>
        </ul>
        <p class="text-gray-700 mb-6"><strong>Instructions:</strong> Stir-fry chicken until cooked. Add vegetables and cook until tender-crisp. Add sauce ingredients and simmer for 2 minutes. Serve over brown rice or quinoa.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">3. Mediterranean Quinoa Bowl</h3>
        <p class="text-gray-700 mb-4"><strong>Prep time:</strong> 15 minutes | <strong>Cook time:</strong> 15 minutes</p>
        <p class="text-gray-700 mb-4"><strong>Ingredients:</strong></p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>1 cup quinoa, cooked</li>
          <li>1 cucumber, diced</li>
          <li>1 cup cherry tomatoes, halved</li>
          <li>1/2 red onion, diced</li>
          <li>1/2 cup feta cheese, crumbled</li>
          <li>1/4 cup kalamata olives</li>
          <li>3 tbsp olive oil</li>
          <li>2 tbsp lemon juice</li>
          <li>Fresh herbs (mint, parsley)</li>
        </ul>
        <p class="text-gray-700 mb-6"><strong>Instructions:</strong> Combine all ingredients in a large bowl. Whisk olive oil and lemon juice for dressing. Pour over salad and toss to combine. Can be made ahead for meal prep.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Meal Prep Tips</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Wash and chop vegetables on weekend</li>
          <li>Cook grains in batches</li>
          <li>Use freezer-friendly containers</li>
          <li>Prepare sauces and dressings ahead</li>
          <li>Keep healthy snacks readily available</li>
        </ul>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <p class="text-yellow-800 font-medium">Time-Saving Tip:</p>
          <p class="text-yellow-700 mt-2">Double recipes and freeze portions for future busy nights. Most of these dishes freeze well and can be reheated quickly.</p>
        </div>
      `,
      date: 'December 15, 2023',
      readTime: '4 min read',
      category: 'Healthy Recipes',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Chef Maria Rodriguez',
      authorRole: 'Nutritional Chef'
    },
    7: {
      title: 'Sustainable Weight Loss: Beyond Quick Fixes',
      excerpt: 'Learn the science behind sustainable weight loss and how to maintain your results long-term.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Truth About Lasting Weight Loss</h2>
        <p class="text-gray-700 mb-6">Sustainable weight loss isn't about drastic diets or extreme exercise routines. It's about creating healthy habits that you can maintain for life.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Why Most Diets Fail</h3>
        <p class="text-gray-700 mb-4">Understanding common pitfalls can help you avoid them:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Overly restrictive:</strong> Creates deprivation mentality</li>
          <li><strong>Unrealistic expectations:</strong> Leads to frustration</li>
          <li><strong>Temporary changes:</strong> Not sustainable long-term</li>
          <li><strong>Ignoring psychology:</strong> Emotional eating patterns</li>
          <li><strong>One-size-fits-all:</strong> Doesn't account for individual differences</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Pillars of Sustainable Weight Loss</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">1. Mindful Eating</h4>
        <p class="text-gray-700 mb-4">Pay attention to hunger cues, eat slowly, and savor your food without distractions.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">2. Balanced Nutrition</h4>
        <p class="text-gray-700 mb-4">Focus on whole foods, adequate protein, healthy fats, and complex carbohydrates.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">3. Consistent Movement</h4>
        <p class="text-gray-700 mb-4">Find activities you enjoy and can maintain regularly, not just intense workouts you dread.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">4. Adequate Sleep</h4>
        <p class="text-gray-700 mb-4">7-9 hours of quality sleep supports hormone balance and metabolism.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">5. Stress Management</h4>
        <p class="text-gray-700 mb-6">Chronic stress elevates cortisol, which can promote abdominal fat storage.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Creating Your Sustainable Plan</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Set realistic, measurable goals</li>
          <li>Focus on adding healthy foods rather than restricting</li>
          <li>Build habits gradually</li>
          <li>Track progress beyond the scale</li>
          <li>Plan for setbacks and challenges</li>
          <li>Celebrate non-scale victories</li>
        </ul>
        
        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8">
          <p class="text-indigo-800 font-medium">Success Mindset:</p>
          <p class="text-indigo-700 mt-2">View weight loss as a journey of self-care, not punishment. The goal is health and vitality, not just a number on the scale.</p>
        </div>
      `,
      date: 'December 10, 2023',
      readTime: '8 min read',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. James Wilson',
      authorRole: 'Weight Management Specialist'
    },
    8: {
      title: 'Meal Planning Mastery: Save Time and Eat Healthy',
      excerpt: 'Discover how effective meal planning can transform your health and simplify your weekly routine.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Art of Strategic Meal Planning</h2>
        <p class="text-gray-700 mb-6">Meal planning is more than just deciding what to eat - it's a powerful tool that saves time, reduces stress, and ensures you consistently make healthy choices.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Benefits of Meal Planning</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Saves money:</strong> Reduces food waste and impulse purchases</li>
          <li><strong>Saves time:</strong> Fewer trips to the store and daily cooking decisions</li>
          <li><strong>Reduces stress:</strong> Eliminates the "what's for dinner?" dilemma</li>
          <li><strong>Improves nutrition:</strong> Ensures balanced meals throughout the week</li>
          <li><strong>Supports goals:</strong> Aligns with weight management or health objectives</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">The Meal Planning Process</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 1: Set Your Goals</h4>
        <p class="text-gray-700 mb-4">Determine your nutritional needs, preferences, and schedule for the week.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 2: Inventory Check</h4>
        <p class="text-gray-700 mb-4">See what you already have to avoid duplicates and use up existing ingredients.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 3: Plan Your Meals</h4>
        <p class="text-gray-700 mb-4">Create a balanced weekly menu considering your schedule and energy levels.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 4: Make Your Shopping List</h4>
        <p class="text-gray-700 mb-4">Organize by store sections to make shopping efficient.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 5: Prep in Batches</h4>
        <p class="text-gray-700 mb-6">Dedicate 2-3 hours for meal prep to make weekdays easier.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Sample Weekly Meal Plan</h3>
        <div class="bg-gray-50 rounded-lg p-6 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold text-gray-900 mb-2">Breakfast Options</h5>
              <ul class="text-gray-700 space-y-1 text-sm">
                <li>Overnight oats with berries</li>
                <li>Greek yogurt with nuts and honey</li>
                <li>Veggie scramble with whole grain toast</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-gray-900 mb-2">Lunch Options</h5>
              <ul class="text-gray-700 space-y-1 text-sm">
                <li>Quinoa salad with grilled chicken</li>
                <li>Lentil soup with whole grain bread</li>
                <li>Leftovers from dinner</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Smart Meal Prep Strategies</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Cook once, eat twice (make extra for leftovers)</li>
          <li>Use versatile ingredients across multiple meals</li>
          <li>Prep components rather than full meals</li>
          <li>Freeze meals in individual portions</li>
          <li>Keep healthy snacks pre-portioned</li>
        </ul>
        
        <div class="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
          <p class="text-teal-800 font-medium">Pro Tip:</p>
          <p class="text-teal-700 mt-2">Start small if you're new to meal planning. Begin with planning just dinners for the week, then gradually add breakfasts and lunches as you get comfortable with the process.</p>
        </div>
      `,
      date: 'December 5, 2023',
      readTime: '5 min read',
      category: 'Meal Planning',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Nutritionist Amy Chen',
      authorRole: 'Meal Planning Expert'
    },
    9: {
      title: 'Lifestyle Changes That Transform Your Health',
      excerpt: 'Small but powerful daily habits that can dramatically improve your overall health and wellbeing.',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Power of Daily Habits</h2>
        <p class="text-gray-700 mb-6">Lasting health transformation comes not from drastic overhauls, but from consistent, small changes that become automatic parts of your daily life.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Morning Rituals for Success</h3>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">1. Hydrate First Thing</h4>
        <p class="text-gray-700 mb-4">Drink a glass of water upon waking to rehydrate and kickstart metabolism.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">2. Morning Movement</h4>
        <p class="text-gray-700 mb-4">Even 10 minutes of stretching or light exercise sets a positive tone for the day.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">3. Protein-Rich Breakfast</h4>
        <p class="text-gray-700 mb-4">Start your day with balanced nutrition to maintain energy and focus.</p>
        
        <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-3">4. Mindfulness Practice</h4>
        <p class="text-gray-700 mb-6">Five minutes of meditation or deep breathing reduces stress and improves mental clarity.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Daily Movement Integration</h3>
        <p class="text-gray-700 mb-4">Incorporate activity throughout your day:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Take the stairs instead of elevators</li>
          <li>Park farther from entrances</li>
          <li>Set hourly movement reminders</li>
          <li>Walk during phone calls</li>
          <li>Do bodyweight exercises during TV commercials</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Nutrition Habits That Stick</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Fill half your plate with vegetables</li>
          <li>Eat slowly and mindfully</li>
          <li>Plan healthy snacks</li>
          <li>Cook at home 80% of the time</li>
          <li>Stay hydrated throughout the day</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Evening Wind-Down Routine</h3>
        <p class="text-gray-700 mb-4">Quality sleep is foundational to health:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Digital detox 1 hour before bed</li>
          <li>Create a relaxing bedtime routine</li>
          <li>Keep bedroom cool and dark</li>
          <li>Practice gratitude journaling</li>
          <li>Read instead of screen time</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Building Habits That Last</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Start small:</strong> Focus on one change at a time</li>
          <li><strong>Be consistent:</strong> Practice daily for 21-30 days</li>
          <li><strong>Track progress:</strong> Use a habit tracker app or journal</li>
          <li><strong>Celebrate wins:</strong> Acknowledge every small success</li>
          <li><strong>Be patient:</strong> Change takes time and persistence</li>
        </ul>
        
        <div class="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <p class="text-pink-800 font-medium">Remember:</p>
          <p class="text-pink-700 mt-2">Progress over perfection. Missing one day doesn't mean failure - it means you're human. The key is consistency over the long term, not perfection every single day.</p>
        </div>
      `,
      date: 'November 28, 2023',
      readTime: '6 min read',
      category: 'Lifestyle Changes',
      image: 'https://images.unsplash.com/photo-1553755147-63e1e8c0ce63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Wellness Coach David Park',
      authorRole: 'Lifestyle Medicine Practitioner'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-green-500 hover:text-green-600 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-green-500 hover:text-green-600 mb-8 font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Blog Post Content */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <button
                onClick={sharePost}
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([postId]) => postId !== id)
              .slice(0, 2)
              .map(([postId, relatedPost]) => (
                <Link 
                  key={postId}
                  to={`/blog/${postId}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium mb-2">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;