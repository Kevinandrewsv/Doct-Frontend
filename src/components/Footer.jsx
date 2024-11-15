import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="mt-16 md:mt-24 md:mx-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 shadow-md">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-6 my-8 text-sm">

        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <img 
            className="mb-4 w-28 opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform cursor-pointer" 
            src={assets.logo} 
            alt="Doct Logo" 
          />
          <p className="w-full md:w-3/4 text-gray-600 leading-relaxed mt-2 text-sm">
            Doct is your trusted healthcare partner, providing access to 100+ experienced doctors for reliable consultations. We're here to ensure you receive the best care and guidance.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-base font-medium mb-3 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:text-indigo-600 hover:underline transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 hover:underline transition duration-200 cursor-pointer">About us</li>
            <li className="hover:text-indigo-600 hover:underline transition duration-200 cursor-pointer">Delivery</li>
            <li className="hover:text-indigo-600 hover:underline transition duration-200 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-base font-medium mb-3 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:text-indigo-600 transition duration-200 cursor-pointer flex items-center">
              <span>+91 9994053302</span>
            </li>
            <li className="hover:text-indigo-600 transition duration-200 cursor-pointer flex items-center">
              <span>doct@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-300 mb-3" />
        <p className="py-3 text-xs text-center text-gray-500">
          &copy; 2024 Doct.netlify.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
