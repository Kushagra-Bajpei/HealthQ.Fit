import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Calendar } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const guestLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Success Stories" },
    { path: "/contact", label: "Contact" },
  ];

  const userLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/plans", label: "My Plans" },
    { path: "/progress", label: "Progress" },
    { path: "/contact", label: "Contact" },
  ];

  const navLinks = user ? userLinks : guestLinks;

  const isActiveLink = (path) => location.pathname === path;

  const getUserName = () => {
    if (user?.displayName) return user.displayName;
    return user?.email?.split("@")[0] || "User";
  };

  const getUserAvatar = () => {
    return (
      user?.photoURL ||
      `https://ui-avatars.com/api/?name=${getUserName()}&background=4ade80&color=fff`
    );
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-2" : "bg-white py-4"
      } border-b border-gray-100/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              src="/logo.jpeg"
              alt="HealthQ.Fit Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm bg-green-50"
            />
            <span className="text-2xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-green-600 transition-colors">
              HealthQ<span className="text-green-500">.Fit</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-[15px] font-medium transition-colors"
                style={{ color: isActiveLink(link.path) ? '#22c55e' : '#4b5563' }}
              >
                <span className="hover:text-green-600">{link.label}</span>
                {isActiveLink(link.path) && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* User / Action Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <img
                    src={getUserAvatar()}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium text-sm">{getUserName()}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-green-600 font-medium">Log In</Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-md shadow-green-500/20 flex items-center space-x-2"
                  >
                    <Calendar size={18} />
                    <span>Book Consultation</span>
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white py-4 px-2 space-y-2 border-t mt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 font-medium rounded-xl transition ${
                      isActiveLink(link.path)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Action Area */}
                {user ? (
                  <div className="pt-4 border-t mt-4">
                    <div className="flex items-center space-x-3 px-4 mb-4">
                      <img src={getUserAvatar()} alt="Profile" className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-900">{getUserName()}</p>
                        <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-red-600 px-4 py-3 rounded-xl font-bold flex items-center justify-center space-x-2"
                    >
                      <LogOut size={18} /><span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 space-y-3 px-2">
                    <Link 
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-xl font-bold"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center w-full bg-green-500 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center space-x-2"
                    >
                      <Calendar size={18} /><span>Book Consultation</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
