import React from "react";
import { Heart, Shield, Brain, Target, Calendar, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24"> {/* Added pt-24 for spacing */}
      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-green-600">Arun Sharma</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Bridging Engineering Excellence with Nutritional Expertise for Holistic Health Solutions
          </p>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Personal Image - Improved sizing and placement */}
            <div className="flex flex-col items-center">
              <img
                src="profile.jpeg"
                alt="Arun Sharma"
                className="w-full max-w-md rounded-2xl object-cover shadow-lg"
              />
              <div className="mt-6 bg-green-100 p-4 rounded-xl w-full max-w-md">
                <h3 className="font-semibold text-green-800 text-center">Quick Facts</h3>
                <ul className="mt-2 space-y-1 text-sm text-green-700">
                  <li className="flex items-center">
                    <Calendar className="mr-2" size={14} />
                    <span>10+ years in engineering & health sectors</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2" size={14} />
                    <span>500+ clients transformed</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="mr-2" size={14} />
                    <span>Specialized in lifestyle disease prevention</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Personal Details - Enhanced with more content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Meet <span className="text-green-600">Arun Sharma</span>
              </h2>
              
              <p className="mt-4 text-gray-700">
                Hi, I'm Arun Sharma — a passionate <span className="font-semibold">Nutritionist</span> 
                and <span className="font-semibold">Lifestyle Disease Expert</span> with a unique background 
                as a <span className="font-semibold">Civil Engineer</span> at <span className="font-semibold">BHEL Haridwar</span>. 
                My journey into health and wellness began when I discovered how engineering principles 
                of structure, stability, and systems could be applied to human health.
              </p>
              
              <p className="mt-4 text-gray-700">
                While excelling in my engineering career, I simultaneously pursued advanced studies in 
                nutrition science, recognizing that many modern health issues stem from lifestyle choices 
                rather than medical conditions. This dual expertise allows me to approach health from both 
                a technical and holistic perspective.
              </p>

              <div className="mt-6 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800">My Unique Approach</h3>
                <p className="mt-2 text-blue-700 text-sm">
                  Combining analytical thinking from engineering with evidence-based nutrition practices 
                  allows me to create structured, sustainable health plans that deliver measurable results.
                </p>
              </div>

              <p className="mt-6 text-gray-700">
                Being health-conscious myself, I started this platform to share evidence-based knowledge, 
                practical health tips, and personalized guidance. I've helped hundreds of individuals 
                prevent and reverse lifestyle diseases through sustainable changes rather than quick fixes.
              </p>

              <p className="mt-4 text-gray-700">
                My methodology focuses on root cause analysis rather than symptom management. I believe 
                that sustainable health comes from understanding how nutrition, activity, sleep, and stress 
                management work together as a system—much like the engineering systems I work with professionally.
              </p>

              {/* Values Section */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Heart className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-600">Compassionate guidance</span>
                </div>
                <div className="flex items-start">
                  <Shield className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-600">Evidence-based methods</span>
                </div>
                <div className="flex items-start">
                  <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-600">Scientific approach</span>
                </div>
                <div className="flex items-start">
                  <Target className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-600">Result-oriented plans</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Detail Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">Why I Do This Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">The Engineering Connection</h4>
                <p className="text-gray-700 text-sm">
                  My engineering background taught me that strong foundations prevent structural failures. 
                  I apply this same principle to health—building strong nutritional foundations prevents 
                  lifestyle diseases from developing in the first place.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">The Nutrition Mission</h4>
                <p className="text-gray-700 text-sm">
                  I've seen too many people struggle with preventable health issues. My mission is to 
                  empower individuals with the knowledge and tools they need to take control of their 
                  health destiny, using practical, sustainable approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education & Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-800 font-bold">BE</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Engineering (Civil)</h3>
                <p className="text-gray-600">From a reputed university</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-800 font-bold">CN</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Certified Nutritionist</h3>
                <p className="text-gray-600">Specialized in lifestyle diseases</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-800 font-bold">HC</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Health Coach Certification</h3>
                <p className="text-gray-600">From a recognized institution</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-800 font-bold">NS</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dietetics and Nutritional Science</h3>
                <p className="text-gray-600">Advanced studies in nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


















