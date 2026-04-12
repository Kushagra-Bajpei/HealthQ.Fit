import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, ArrowRight, Calendar, Star, Quote } from 'lucide-react';
import Views from '../components/Views';
import Hero3D from '../components/Hero3D';

const Home = () => {
  const services = [
    { icon: '🥗', title: 'Personalized Meal Plans', desc: 'Custom nutrition maps tailored to your exact metabolic needs and lifestyle goals.' },
    { icon: '📉', title: 'Clinical Weight Management', desc: 'Sustainable frameworks focusing on hormonal balance, not just caloric restriction.' },
    { icon: '🔬', title: 'Diabetes/PCOS Reversal', desc: 'Specialized dietary interventions for managing and reversing chronic lifestyle disorders.' },
    { icon: '⚡', title: 'Energy & Performance', desc: 'Optimized fueling strategies for athletes, executives, and high-performers.' }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-green-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-100/80 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-6 backdrop-blur-md border border-green-200 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Premium SaaS Nutrition Platform</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                Biohack Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Health Paradigm</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Elevate your physical and mental peak with <b>Dr. Arun Sharma</b>. Access bespoke dietary algorithms, precision tracking, and elite 1-on-1 lifestyle coaching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <Calendar size={20} />
                    <span>Book Your Discovery Call</span>
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-8 pt-6 border-t border-gray-200/60">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">2000+</p>
                    <p className="text-sm text-gray-500 font-medium">Lives Transformed</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">4.9/5 Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Object & Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[600px] w-full flex items-center justify-center"
            >
              {/* 3D Canvas element */}
              <div className="absolute inset-0 z-0">
                <Hero3D />
              </div>

              {/* Floating Testimonial Glass Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 max-w-xs bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-2xl z-10"
              >
                <div className="flex gap-2 text-green-500 mb-2">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-800 font-medium text-sm italic mb-4 drop-shadow-sm">"Dr. Arun entirely transformed my relationship with food. I reversed my Type 2 Diabetes in 6 months."</p>
                <div className="flex items-center gap-3">
                  <img src="https://ui-avatars.com/api/?name=Sarah+J" alt="Sarah" className="w-8 h-8 rounded-full border border-gray-200" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Sarah Jenkins</p>
                    <p className="text-[10px] text-gray-500">Corporate Executive</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Metric Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-xl z-10 flex items-center gap-4"
              >
                <div className="bg-green-500 rounded-full p-3 text-white">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900">95%</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Success Rate</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Branding Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl relative">
                {/* Fallback image if doctor image isn't available */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img src="profile.jpeg" alt="Dr. Arun Sharma" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl font-bold">Dr. Arun Sharma</h3>
                  <p className="text-green-400 font-medium">Chief Clinical Nutritionist & Founder</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Quote className="text-green-500/20 w-24 h-24 absolute -mt-10 -ml-8" />
              <h2 className="text-4xl font-bold mb-6 relative z-10">Pioneering Data-Driven Clinical Nutrition.</h2>
              <p className="text-xl text-gray-400 mb-6 font-light leading-relaxed">
                With over a decade of clinical experience, my philosophy relies entirely on quantifiable biomarkers paired with sustainable lifestyle shifts. No crash diets. No temporary fixes.
              </p>
              <ul className="space-y-4 mb-8">
                {['MSc. Clinical Nutrition & Dietetics', 'Certified Diabetes Educator', 'Ex-Head of Nutrition at Apollo Hospitals', 'Published Health Researcher'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold text-lg group">
                <span>Read Full Biography</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services SaaS Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Optimization Protocols</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Targeted nutrition algorithms designed for your specific biological requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-green-500/10 transition-all group"
              >
                <div className="text-5xl mb-6 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations / Views */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Clinical Outcomes.</h2>
              <p className="text-xl text-gray-500">Real patients. Verified biomarkers. Lasting results.</p>
            </div>
            <Link to="/testimonials" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
              View Case Studies <ArrowRight size={18} />
            </Link>
          </div>

          <Views />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 tracking-tight">Ready to Audit Your Health?</h2>
          <p className="text-xl text-green-100 mb-10 font-medium">Join the elite platform and get absolute clarity on your biological potential.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition duration-300 flex items-center justify-center space-x-3 mx-auto"
            >
              <Calendar size={24} />
              <span>Apply For Coaching</span>
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
