import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Contact = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    healthGoals: "",
    preferredTime: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const services = [
    "Weight Management",
    "Diabetes Management",
    "Sports Nutrition",
    "Pediatric Nutrition",
    "Geriatric Nutrition",
    "Plant-Based Nutrition",
    "Gut Health",
    "Hormone Balance",
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      let token = null;
      if (user) {
        token = await user.getIdToken();
      }

      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${API_BASE}/api/v1/contact/submit`, {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus({ type: "success", message: "Thank you! Your consultation request has been received. We'll contact you within 24 hours." });
      setFormData({ fullName: "", email: "", phone: "", service: "", healthGoals: "", preferredTime: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      setStatus({ type: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    "Free 15-minute initial consultation",
    "Comprehensive health assessment",
    "Personalized nutrition recommendations",
    "Ongoing support and follow-up",
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9555 xxx-x29", sub: "Mon-Fri, 9AM - 6PM" },
    { icon: Mail, label: "Email", value: "Dr.Arunsharma@gmail.com", sub: "We respond within 24 hours" },
    { icon: MapPin, label: "Address", value: "Khurram Nagar, Lucknow", sub: "Uttar Pradesh, India" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 6PM", sub: "Sunday: Closed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Book a Consultation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Health Journey
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Fill out the form and Dr. Arun Sharma will personally review your goals and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Consultation</h2>
              <p className="text-gray-500 mb-8 text-sm">Fields marked with * are required.</p>

              {status.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${status.type === "success" ? "bg-green-50 border border-green-200 text-green-800" : "bg-red-50 border border-red-200 text-red-800"}`}>
                  {status.type === "success" && <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="Your full name" required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com" required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Health Goals</label>
                  <textarea
                    name="healthGoals" value={formData.healthGoals} onChange={handleChange}
                    placeholder="e.g., Manage diabetes, lose weight, improve energy" rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Consultation Time</label>
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900"
                  >
                    <option value="">Select preferred time</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your current health challenges..." rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition text-gray-900 resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={submitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-green-500/20"
                >
                  <Calendar size={20} />
                  <span>{submitting ? "Submitting..." : "Schedule Consultation"}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2.5 rounded-xl flex-shrink-0">
                      <item.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-200 flex-shrink-0" />
                    <span className="text-green-50">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
