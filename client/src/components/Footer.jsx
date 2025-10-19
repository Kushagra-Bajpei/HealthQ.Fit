import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Weight Management',
    'Diabetes Nutrition',
    'Sports Nutrition',
    'Heart Health',
    'Pediatric Nutrition',
    'Meal Planning',
    'Gut Health',
    'Hormone Balance',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* ✅ Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.jpeg"
                alt="HealthQ.Fit Logo"
                className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
              />
              <span className="text-2xl font-bold text-green-400">
                HealthQ.Fit
              </span>
            </Link>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Empowering individuals to achieve optimal health through
              personalized nutrition plans, evidence-based guidance, and ongoing
              support from certified experts.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-green-400 transition duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">support@healthqfit.com</p>
                  <p className="text-sm text-gray-400">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Wellness Street</p>
                  <p className="text-gray-300">Health City, HC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-center md:text-left text-gray-400">
              &copy; {currentYear} HealthQ.Fit. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-green-400 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-green-400 transition duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-green-400 transition duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
