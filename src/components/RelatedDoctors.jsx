// src/components/RelatedDoctors.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length && speciality) {
      setRelDoc(doctors.filter(d => d.speciality === speciality && d._id !== docId));
    }
  }, [doctors, speciality, docId]);

  return (
    <motion.section
      className="mt-24 mb-16 px-6 py-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl shadow-inner"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Section Header */}
      <motion.div variants={fadeIn} className="text-center mb-8">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700">
          Discover Related Doctors
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Find trusted professionals in the same specialty and book an appointment in one click.
        </p>
      </motion.div>

      {/* Doctors Grid */}
      {relDoc.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {relDoc.map((doc, idx) => (
            <motion.div
              key={doc._id}
              variants={fadeIn}
              whileHover={{ scale: 1.03, y: -4 }}
              className="
                relative flex flex-col bg-white/40 backdrop-blur-md border border-white/40
                rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-200
              "
              onClick={() => {
                navigate(`/appointment/${doc._id}`);
                window.scrollTo(0,0);
              }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={doc.image || 'https://via.placeholder.com/300'}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.speciality}</p>
                </div>
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full font-medium
                      ${doc.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {doc.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p variants={fadeIn} className="text-center text-gray-600">
          No related doctors found.
        </motion.p>
      )}

      {/* View More */}
      <motion.div variants={fadeIn} className="text-center mt-10">
        <button
          onClick={() => {
            navigate('/doctors');
            window.scrollTo(0,0);
          }}
          className="
            inline-block px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500
            text-white font-medium rounded-full shadow-lg transition-transform
            hover:scale-105 hover:brightness-110
          "
        >
          View More Doctors
        </button>
      </motion.div>
    </motion.section>
  );
};

export default RelatedDoctors;
