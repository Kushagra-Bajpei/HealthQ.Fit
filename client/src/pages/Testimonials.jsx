import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Target, Heart, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 42,
      location: 'New York',
      condition: 'Diabetes Management',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Working with Arun has been life-changing. My HbA1c dropped from 8.5 to 5.8 in just 3 months! His engineering approach to nutrition made everything so systematic and easy to follow.',
      results: ['HbA1c: 8.5 → 5.8', 'Weight: 185 → 160 lbs', 'Medication reduced by 50%']
    },
    {
      id: 2,
      name: 'Mike Chen',
      age: 35,
      location: 'California',
      condition: 'Weight Loss & Fitness',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'As a software engineer, I appreciated Arun\'s data-driven approach. Lost 30 pounds while gaining muscle mass. The meal plans were practical and fit perfectly with my busy schedule.',
      results: ['Weight: 220 → 190 lbs', 'Body fat: 28% → 18%', 'Energy levels doubled']
    },
    {
      id: 3,
      name: 'Priya Patel',
      age: 29,
      location: 'Texas',
      condition: 'PCOS Management',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'After struggling with PCOS for years, Arun\'s holistic approach finally gave me results. Regular periods, clearer skin, and I feel like myself again. The lifestyle modifications were game-changing.',
      results: ['Regular menstrual cycle', 'Acne cleared by 90%', '25-pound weight loss']
    },
    {
      id: 4,
      name: 'Robert Davis',
      age: 58,
      location: 'Florida',
      condition: 'Heart Health',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'My cardiologist was amazed at my progress. Cholesterol levels normalized without additional medication. Arun\'s engineering background makes him exceptionally good at explaining complex health concepts.',
      results: ['Cholesterol: 280 → 180', 'BP: 150/95 → 120/80', 'Reduced medication']
    },
    {
      id: 5,
      name: 'Emily Wilson',
      age: 31,
      location: 'Chicago',
      condition: 'Thyroid Issues',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'The thyroid management program was incredibly detailed. My fatigue disappeared, and I have sustainable energy throughout the day. The supplement guidance was particularly helpful.',
      results: ['TSH levels normalized', 'Energy levels restored', '15-pound weight loss']
    },
    {
      id: 6,
      name: 'James Martinez',
      age: 45,
      location: 'Colorado',
      condition: 'Sports Nutrition',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'As a marathon runner, Arun\'s nutrition plan optimized my performance. Personal best timing and faster recovery. The periodization approach was brilliant for training cycles.',
      results: ['Marathon PB: 3:45 → 3:20', 'Recovery time halved', 'Muscle mass increased']
    }
  ];

  const stats = [
    { icon: Target, number: '500+', label: 'Clients Transformed' },
    { icon: Heart, number: '95%', label: 'Success Rate' },
    { icon: TrendingUp, number: '12k+', label: 'Hours of Consultation' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real people, real results. See how our clients have transformed their health through personalized nutrition and lifestyle changes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.location}</p>
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.condition}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <div className="mb-4 relative">
                    <Quote className="w-8 h-8 text-green-100 absolute -top-2 -left-1" />
                    <p className="text-gray-700 relative z-10 pl-4">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {testimonial.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of satisfied clients who have transformed their health with personalized nutrition guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-green-500 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Call: +1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
