// src/components/SpecialityMenu.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaFemale,
  FaAllergies,
  FaBaby,
  FaBrain,
  FaPills,
} from 'react-icons/fa';

const specialityData = [
  { speciality: 'physician',    Icon: FaUserMd },
  { speciality: 'Gynecologist',          Icon: FaFemale },
  { speciality: 'Dermatologist',         Icon: FaAllergies },
  { speciality: 'Pediatricians',         Icon: FaBaby },
  { speciality: 'Neurologist',           Icon: FaBrain },
  { speciality: 'Gastroenterologist',    Icon: FaPills },
];

// Vibrant glass-style gradient pairs
const gradients = [
  ['from-pink-200', 'to-pink-50'],
  ['from-blue-200', 'to-blue-50'],
  ['from-green-200', 'to-green-50'],
  ['from-purple-200', 'to-purple-50'],
  ['from-yellow-200', 'to-yellow-50'],
  ['from-indigo-200', 'to-indigo-50'],
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  },
};

const SpecialityMenu = () => {
  const location = useLocation();

  return (
    <section id="speciality" className="bg-white py-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
          Find by Specialty
        </h2>
        <p className="mt-3 text-gray-500">
          Browse our trusted doctors and book your appointment in a click.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {specialityData.map(({ speciality, Icon }, idx) => {
          const path = `/doctors/${encodeURIComponent(speciality)}`;
          const isActive = location.pathname === path;
          const [from, to] = gradients[idx % gradients.length];

          return (
            <motion.div 
              key={speciality}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={path}
                onClick={() => window.scrollTo(0, 0)}
                className={`
                  relative flex flex-col items-center 
                  p-6 rounded-2xl
                  bg-gradient-to-br ${from} ${to}
                  bg-opacity-30 backdrop-blur-md
                  border border-white/20
                  shadow-lg
                  transform transition-all duration-300
                  ${isActive
                    ? 'ring-2 ring-teal-400 shadow-2xl'
                    : 'hover:shadow-xl'}
                `}
              >
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white/50 backdrop-blur-sm">
                  <Icon className="text-3xl text-gray-700" />
                </div>
                <span className="mt-2 text-gray-800 font-semibold text-center">
                  {speciality}
                </span>
                
                {/* subtle shine overlay */}
                <span className="absolute top-0 left-0 w-1/2 h-full bg-white/10 rounded-2xl transform -translate-x-full -skew-x-12 transition-transform duration-700 hover:translate-x-full"></span>
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SpecialityMenu;
