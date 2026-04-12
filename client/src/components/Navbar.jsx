import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Calendar, Sun, Moon, LayoutDashboard, ListChecks, TrendingUp, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsProfileOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // These links are ALWAYS visible — for everyone
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Success Stories" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  // Dropdown items shown when logged in
  const profileMenuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/plans", label: "My Plans", icon: ListChecks },
    { path: "/progress", label: "Progress", icon: TrendingUp },
  ];

  const isActiveLink = (path) => location.pathname === path;

  const getUserName = () => {
    if (user?.displayName) return user.displayName;
    return user?.email?.split("@")[0] || "User";
  };

  const getUserAvatar = () =>
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${getUserName()}&background=4ade80&color=fff`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-lg py-2" : "bg-white py-4"
      } border-b border-gray-100/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <motion.img
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              src="/logo.jpeg"
              alt="HealthQ.Fit"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shadow-sm"
            />
            <span className="text-2xl font-extrabold text-gray-900 group-hover:text-green-600 transition-colors">
              HealthQ<span className="text-green-500">.Fit</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-[15px] font-medium transition-colors"
                style={{ color: isActiveLink(link.path) ? "#22c55e" : "#4b5563" }}
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

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>

            {user ? (
              /* ── Profile Avatar + Dropdown ── */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-green-400 px-3 py-1.5 rounded-full transition-all group"
                >
                  <img
                    src={getUserAvatar()}
                    alt="Profile"
                    className="w-8 h-8 rounded-full ring-2 ring-green-400/40"
                  />
                  <span className="text-gray-700 font-medium text-sm max-w-[100px] truncate">
                    {getUserName()}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* ── Dropdown Panel ── */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      {/* User Info Header */}
                      <div className="px-4 py-3 bg-green-50 border-b border-green-100">
                        <p className="text-sm font-bold text-gray-900 truncate">{getUserName()}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-1.5">
                        {profileMenuItems.map(({ path, label, icon: Icon }) => (
                          <Link
                            key={path}
                            to={path}
                            onClick={() => setIsProfileOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 ${
                              isActiveLink(path)
                                ? "text-green-600 bg-green-50/60"
                                : "text-gray-700"
                            }`}
                          >
                            <Icon size={16} className="text-green-500" />
                            {label}
                          </Link>
                        ))}
                      </div>

                      {/* Sign Out */}
                      <div className="border-t border-gray-100 py-1.5">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* ── Guest Actions ── */
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-green-600 font-medium text-sm transition"
                >
                  Log In
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-md shadow-green-500/20 flex items-center space-x-2 text-sm"
                  >
                    <Calendar size={17} />
                    <span>Book Consultation</span>
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* ── Mobile: Theme Toggle + Hamburger ── */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white pt-3 pb-5 px-2 space-y-1 border-t border-gray-100 mt-3">
                {/* Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2.5 px-4 font-medium rounded-xl transition ${
                      isActiveLink(link.path)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="my-2 border-t border-gray-100" />

                {user ? (
                  <>
                    {/* User Info */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-xl mb-1">
                      <img src={getUserAvatar()} alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-green-400/40" />
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-sm truncate">{getUserName()}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>
                    </div>
                    {/* Profile Menu */}
                    {profileMenuItems.map(({ path, label, icon: Icon }) => (
                      <Link
                        key={path}
                        to={path}
                        className={`flex items-center gap-3 py-2.5 px-4 font-medium rounded-xl transition ${
                          isActiveLink(path)
                            ? "text-green-600 bg-green-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon size={17} className="text-green-500" />
                        {label}
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 font-semibold transition mt-1"
                    >
                      <LogOut size={17} />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="space-y-2 px-2 pt-1">
                    <Link
                      to="/login"
                      className="block text-center w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-600 transition"
                    >
                      <Calendar size={17} />
                      Book Consultation
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
