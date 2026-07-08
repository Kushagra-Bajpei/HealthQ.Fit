// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const { user } = useAuth();

//   // Public links — always visible (matches Navbar)
//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About Dr. Arun' },
//     { path: '/services', label: 'Services' },
//     { path: '/testimonials', label: 'Success Stories' },
//     { path: '/blog', label: 'Health Blog' },
//     { path: '/contact', label: 'Book Consultation' },
//   ];

//   // Shown in a separate column when logged in
//   const accountLinks = [
//     { path: '/dashboard', label: 'Dashboard' },
//     { path: '/plans', label: 'My Plans' },
//     { path: '/progress', label: 'Progress' },
//     { path: '/contact', label: 'Contact Us' },
//   ];

//   const services = [
//     'Weight Management',
//     'Diabetes Nutrition',
//     'Sports Nutrition',
//     'Gut Health',
//     'Hormone Balance',
//     'Pediatric Nutrition',
//   ];

//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <Link to={user ? '/dashboard' : '/'} className="flex items-center space-x-3 mb-4">
//               <img
//                 src="/logo.jpeg"
//                 alt="HealthQ.Fit"
//                 className="w-10 h-10 rounded-xl object-cover border-2 border-green-500"
//               />
//               <span className="text-xl font-bold">HealthQ<span className="text-green-400">.Fit</span></span>
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed mb-6">
//               Dr. Arun Sharma's clinical nutrition platform. Science-backed meal plans and personalized health coaching for lasting transformation.
//             </p>
//             <div className="flex space-x-3">
//               {socialLinks.map((s, i) => (
//                 <a
//                   key={i}
//                   href={s.href}
//                   aria-label={s.label}
//                   className="bg-gray-800 hover:bg-green-500 p-2.5 rounded-lg transition-colors duration-200"
//                 >
//                   <s.icon className="w-4 h-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation — always public */}
//           <div>
//             <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-5">Navigation</h3>
//             <ul className="space-y-3">
//               {navLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* My Account / Services Column */}
//           {user ? (
//             <div>
//               <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-5">My Account</h3>
//               <ul className="space-y-3">
//                 {accountLinks.map((link, i) => (
//                   <li key={i}>
//                     <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <div>
//               <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-5">Our Services</h3>
//               <ul className="space-y-3">
//                 {services.map((s, i) => (
//                   <li key={i}>
//                     <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                       {s}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-5">Contact</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <Phone className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-white text-sm font-medium">+91 9555 xxx-x29</p>
//                   <p className="text-gray-500 text-xs">Mon-Sat, 9 AM – 6 PM</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-white text-sm font-medium">Dr.Arunsharma@gmail.com</p>
//                   <p className="text-gray-500 text-xs">Response within 24 hrs</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-white text-sm font-medium">Khurram Nagar, Lucknow</p>
//                   <p className="text-gray-500 text-xs">Uttar Pradesh, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
//           <p className="text-gray-500 text-sm flex items-center gap-1.5">
//             © {currentYear} HealthQ.Fit · Made with <Heart className="w-3.5 h-3.5 text-red-400" fill="currentColor" /> by Dr. Arun Sharma's Team
//           </p>
//           <div className="flex gap-5 text-xs text-gray-500">
//             <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
//             <Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
