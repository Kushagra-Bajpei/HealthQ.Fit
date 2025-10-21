import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, ArrowRight, Calendar, Phone } from 'lucide-react';
import Views from '../components/Views';

const Home = () => {
  const services = [
    {
      icon: '🥗',
      title: 'Personalized Meal Plans',
      description: 'Custom nutrition plans tailored to your unique needs and goals'
    },
    {
      icon: '🏃',
      title: 'Weight Management',
      description: 'Sustainable weight loss or gain strategies with ongoing support'
    },
    {
      icon: '💪',
      title: 'Sports Nutrition',
      description: 'Performance optimization for athletes and active individuals'
    },
    {
      icon: '❤️',
      title: 'Heart Health',
      description: 'Dietary strategies to support cardiovascular wellness'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Health Through Personalized Nutrition
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get expert guidance from certified nutritionist Dr. Sarah Johnson. 
                Create sustainable eating habits, achieve your health goals, and unlock 
                your full potential with science-backed nutrition strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Free Consultation</span>
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">500+ Clients Helped</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Certified Expert</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthy food selection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Personalized Nutrition Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nutrition solutions designed to meet your unique health needs and lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-green-500 hover:text-green-600 font-semibold text-lg"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Views Component Section (Replaces Testimonials) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our personalized approach has helped clients achieve remarkable health transformations
            </p>
          </div>
          
          {/* Views Component */}
          <Views />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free 15-minute consultation to discuss your goals and see how we can help you achieve them
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Calendar size={20} />
            <span>Book Free Consultation</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Science-Backed Approach</h3>
              <p className="text-gray-600">Evidence-based nutrition strategies tailored to your unique needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Continuous guidance and adjustments to ensure long-term success</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Expertise</h3>
              <p className="text-gray-600">Professional guidance from a certified nutrition specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



