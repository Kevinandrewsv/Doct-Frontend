// src/components/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const goAbout = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <footer className="mt-16 md:mt-24 mx-4 md:mx-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 backdrop-blur-sm bg-white/40 shadow-lg">
      {/* Logo & Title */}
      <div
        className="flex items-center gap-2 cursor-pointer mb-8"
        onClick={goHome}
      >
        <img src={assets.logo} alt="Doct Logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-teal-600">Doct.</span>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            Doct is your trusted healthcare partner, connecting you
            with 100+ experienced doctors for reliable teleconsultations
            and in-person visits.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li
              className="cursor-pointer"
              onClick={() => {
                goHome();
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                goAbout();
              }}
            >
              About Us
            </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+91 99940 53302</li>
            <li>doct@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        <p>© 2024 Doct.netlify.com — All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF size={14} />
          <FaTwitter size={14} />
          <FaLinkedinIn size={14} />
          <FaInstagram size={14} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
