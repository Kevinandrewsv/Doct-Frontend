// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const goAbout = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 font-medium text-sm transition-colors ${
      isActive
        ? 'text-teal-600 border-b-2 border-teal-600'
        : 'text-gray-800 hover:text-black'
    }`;

  return (
    <nav className="sticky top-4 mx-4 md:mx-auto max-w-7xl bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20 z-50">
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={goHome}
        >
          <img src={assets.logo} alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-teal-600">Doct.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: '/', label: 'HOME' },
            { to: '/doctors', label: 'ALL DOCTORS' },
            { to: '/about', label: 'ABOUT' },
            { to: '/contact', label: 'CONTACT' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClasses}
              onClick={() => window.scrollTo(0, 0)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Auth / Profile & Mobile Toggle */}
        <div className="flex items-center space-x-4">
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
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/80 backdrop-blur-sm shadow-md rounded-md py-2 text-sm">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate('/my-profile');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left px-4 py-2"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate('/my-appointments');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left px-4 py-2"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate('/login');
                  window.scrollTo(0, 0);
                }}
                className="px-4 py-2 bg-teal-600 bg-opacity-80 text-white rounded-full text-sm transition-colors"
              >
                Create Account
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <img
              src={menuOpen ? assets.cross_icon : assets.menu_icon}
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-sm shadow-inner rounded-b-xl border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {[
              { to: '/', label: 'HOME' },
              { to: '/doctors', label: 'ALL DOCTORS' },
              { to: '/about', label: 'ABOUT' },
              { to: '/contact', label: 'CONTACT' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClasses}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {label}
              </NavLink>
            ))}

            {token && userData ? (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/my-profile');
                    window.scrollTo(0, 0);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700"
                >
                  My Profile
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/my-appointments');
                    window.scrollTo(0, 0);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700"
                >
                  My Appointments
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/login');
                  window.scrollTo(0, 0);
                }}
                className="mt-2 w-full px-3 py-2 bg-teal-600 text-white rounded-full text-center text-sm"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
