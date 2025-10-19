import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

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
    <nav className="bg-white shadow-lg py-3 fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="w-full px-4 sm:px-8">
        <div className="flex justify-between items-center w-full">
          {/* ✅ Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="HealthQ.Fit Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-green-500 object-cover"
            />
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-800 hover:text-blue-600 transition duration-300">
              HealthQ.Fit
            </span>
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-lg transition duration-300 ${
                  isActiveLink(link.path)
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ✅ User Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img
                src={getUserAvatar()}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-green-500"
              />
              <span className="text-gray-700 font-medium">{getUserName()}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold transition duration-300 flex items-center space-x-2"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[650px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white py-4 space-y-3 border-t rounded-b-lg shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 font-medium text-lg transition duration-300 ${
                  isActiveLink(link.path)
                    ? "text-green-500 bg-green-50 rounded-lg"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ User info in Mobile */}
            <div className="flex items-center space-x-3 bg-gray-100 px-4 py-3 rounded-lg mt-2">
              <img
                src={getUserAvatar()}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div>
                <p className="font-semibold text-gray-900">{getUserName()}</p>
                <p className="text-sm text-gray-600 truncate">{user?.email}</p>
              </div>
            </div>

            {/* ✅ Logout Button (Mobile visible now) */}
            <button
              onClick={handleLogout}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
