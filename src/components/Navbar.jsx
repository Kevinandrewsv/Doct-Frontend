import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Info, Phone, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'HOME', Icon: Home },
  { to: '/doctors', label: 'ALL DOCTORS', Icon: Users },
  { to: '/about', label: 'ABOUT', Icon: Info },
  { to: '/contact', label: 'CONTACT', Icon: Phone },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
    window.scrollTo(0, 0);
  };

  // Desktop link styling (unchanged)
  const desktopLink = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-teal-600 border-b-2 border-teal-600'
        : 'text-gray-800 hover:text-black'
    }`;

  // Mobile menu variants for Framer Motion
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="sticky top-4 mx-4 md:mx-auto max-w-7xl bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20 z-50">
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          <img src={assets.logo} alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-teal-600">Doct.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={desktopLink}
              onClick={() => window.scrollTo(0, 0)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {token && userData ? (
            <div className="relative">
              <img
                src={userData.image}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer border-2 border-white/50"
                onClick={() => setMenuOpen((o) => !o)}
              />
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-44 bg-white shadow rounded-xl py-2 text-sm z-50"
                  >
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate('/my-profile');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate('/my-appointments');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 rounded-md"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
                window.scrollTo(0, 0);
              }}
              className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-16 right-0 w-full xs:max-w-xs p-4"
          >
            <div className="bg-white rounded-xl shadow-lg border border-white/20 p-6 space-y-4">
              {/* Nav Links */}
              <div className="space-y-2">
                {links.map(({ to, label, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`
                    }
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Icon size={24} />
                    {label}
                  </NavLink>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                {token && userData ? (
                  <>
                    <button
                      onClick={() => {
                        navigate('/my-profile');
                        setMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate('/my-appointments');
                        setMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={logout}
                      className="w-full py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      navigate('/login');
                      setMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}