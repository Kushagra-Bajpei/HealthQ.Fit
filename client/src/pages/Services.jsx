import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, Target, Heart, Activity, Shield, Star, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: '🥗',
      title: 'Personalized Meal Planning',
      description: 'Customized nutrition plans tailored to your unique needs, preferences, and health goals.',
      features: [
        'Individualized calorie and macronutrient targets',
        'Food preferences and allergy considerations',
        'Weekly shopping lists and recipes',
        'Cultural and lifestyle adaptations'
      ],
      duration: 'Ongoing support',
      bestFor: 'Weight management, specific health conditions'
    },
    {
      icon: '💪',
      title: 'Weight Management Program',
      description: 'Sustainable weight loss or gain strategies with evidence-based approaches.',
      features: [
        'Metabolic rate assessment',
        'Behavior modification techniques',
        'Progress tracking and adjustments',
        'Maintenance planning'
      ],
      duration: '12-16 weeks',
      bestFor: 'Weight loss, muscle gain, body recomposition'
    },
    {
      icon: '🩺',
      title: 'Lifestyle Disease Management',
      description: 'Comprehensive strategies for diabetes, PCOS, thyroid, and cardiovascular conditions.',
      features: [
        'Medical nutrition therapy',
        'Blood sugar monitoring guidance',
        'Medication-nutrient interactions',
        'Symptom management protocols'
      ],
      duration: 'Long-term management',
      bestFor: 'Diabetes, PCOS, thyroid issues, heart health'
    },
    {
      icon: '🏃‍♂️',
      title: 'Sports Nutrition',
      description: 'Performance optimization for athletes and active individuals.',
      features: [
        'Pre/post-workout nutrition',
        'Hydration strategies',
        'Supplement guidance',
        'Competition preparation'
      ],
      duration: 'Season-based planning',
      bestFor: 'Athletes, fitness enthusiasts'
    },
    {
      icon: '🧘‍♀️',
      title: 'Gut Health Optimization',
      description: 'Improve digestive health and gut microbiome balance.',
      features: [
        'Gut microbiome assessment',
        'Elimination diet guidance',
        'Probiotic and prebiotic strategies',
        'Inflammation reduction protocols'
      ],
      duration: '8-12 weeks',
      bestFor: 'IBS, bloating, digestive issues'
    },
    {
      icon: '❤️',
      title: 'Heart Health Program',
      description: 'Dietary strategies to support cardiovascular wellness and cholesterol management.',
      features: [
        'Cholesterol-lowering plans',
        'Blood pressure management',
        'Anti-inflammatory diets',
        'Portion control education'
      ],
      duration: '12 weeks minimum',
      bestFor: 'Hypertension, high cholesterol, heart disease risk'
    }
  ];

  const specializations = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Diabetes Reversal',
      description: 'Structured programs to manage and reverse Type 2 diabetes through nutrition'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Cardiac Nutrition',
      description: 'Heart-healthy eating patterns for prevention and management of cardiovascular diseases'
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: 'Metabolic Health',
      description: 'Optimizing metabolism for energy, weight management, and overall vitality'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Preventive Nutrition',
      description: 'Proactive approaches to prevent lifestyle diseases before they develop'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive health evaluation and goal setting'
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'Customized nutrition strategy based on your unique needs'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Guidance on implementing your plan with practical support'
    },
    {
      step: 4,
      title: 'Monitoring & Adjustment',
      description: 'Regular follow-ups and plan optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Nutrition Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Evidence-based nutritional guidance and lifestyle interventions to help you achieve optimal health, 
            manage chronic conditions, and transform your relationship with food.
          </p>
          <Link
            to="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center space-x-2"
          >
            <Star className="w-5 h-5" />
            <span>Book Free Consultation</span>
          </Link>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Specialization</h2>
            <p className="text-xl text-gray-600">Expert care for specific health challenges</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-gray-600">Tailored programs for your health journey</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{service.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 px-8 py-4 border-t">
                  <Link
                    to="/contact"
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2"
                  >
                    <span>Learn More and Get Started</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-gray-600">Structured approach for guaranteed results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Take the first step towards better health with a free 15-minute consultation. 
            Let's discuss your goals and create a personalized plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based Approach</h3>
              <p className="text-gray-600">All recommendations are backed by scientific research and clinical experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">Customized plans that respect your unique needs, preferences, and lifestyle</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Results</h3>
              <p className="text-gray-600">Focus on long-term health transformation rather than quick fixes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
