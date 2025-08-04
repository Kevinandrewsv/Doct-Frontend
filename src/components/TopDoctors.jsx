// src/components/TopDoctors.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
};

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-8 my-16 text-[#262626]">
      {/* Section Title */}
      <h1 className="text-4xl font-semibold text-gray-800">Top Doctors to Book</h1>
      <p className="sm:w-1/2 md:w-1/3 text-center text-sm text-gray-600">
        Browse through our list of trusted doctors and book your appointment hassle-free.
      </p>

      {/* Doctors Grid */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 sm:px-0 pt-8"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {doctors.slice(0, 10).map((item) => (
          <motion.div
            key={item._id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0); }}
            className="
              relative flex flex-col items-center p-6
              bg-gradient-to-r from-sky-100 via-white to-teal-50
              rounded-2xl shadow-lg cursor-pointer
              transition-shadow duration-300
              hover:shadow-2xl
            "
          >
            {/* shine overlay */}
            <span className="
              absolute top-0 left-0 w-16 h-16 bg-white/10
              rounded-br-full pointer-events-none
              transition-all duration-700
              group-hover:translate-x-full
            " />

            <img
              src={item.image}
              alt={item.name}
              className="
                w-28 h-28 sm:w-32 sm:h-32 rounded-full
                bg-white/40 backdrop-blur-sm object-cover mb-4
                transition-transform duration-300
                hover:scale-105
              "
            />

            <div className="flex items-center gap-2 mb-2">
              <span
                className={`
                  w-2 h-2 rounded-full
                  ${item.available ? 'bg-green-500' : 'bg-gray-500'}
                `}
              />
              <p className={`
                text-xs font-medium
                ${item.available ? 'text-green-500' : 'text-gray-500'}
              `}>
                {item.available ? 'Available' : 'Not Available'}
              </p>
            </div>

            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-600">{item.speciality}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* More Button */}
      <motion.button
        onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="
          mt-10 px-12 py-3 rounded-full
          bg-white/20 backdrop-blur-md border border-white/30
          text-gray-700 font-medium
          transition-colors duration-300
          hover:bg-teal-500 hover:text-white
        "
      >
        View More
      </motion.button>
    </div>
  );
};

export default TopDoctors;
