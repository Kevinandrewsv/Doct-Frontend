// src/pages/Appointment.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import axios from 'axios';
import { toast } from 'react-toastify';

const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
};

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const navigate = useNavigate();

  // Fetch doctor info once doctors list arrives
  useEffect(() => {
    if (!doctors.length) return;
    const found = doctors.find(d => d._id === docId);
    setDocInfo(found || null);
  }, [doctors, docId]);

  // Build 7-day availability slots
  useEffect(() => {
    if (!docInfo) return;
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);

      // Determine start time
      const start = new Date(day);
      if (i === 0) {
        // round up to next half-hour or min 10:00
        const minutes = day.getMinutes() >= 30 ? 0 : 30;
        const hours = Math.max(10, day.getHours() + (day.getMinutes() >= 30 ? 1 : 0));
        start.setHours(hours, minutes, 0, 0);
      } else {
        start.setHours(10, 0, 0, 0);
      }

      // End at 21:00
      const end = new Date(day);
      end.setHours(21, 0, 0, 0);

      const daySlots = [];
      const cursor = new Date(start);
      while (cursor < end) {
        const formatted = cursor.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const key = `${cursor.getDate()}_${cursor.getMonth()+1}_${cursor.getFullYear()}`;
        const alreadyBooked = docInfo.slots_booked?.[key]?.includes(formatted);
        if (!alreadyBooked) {
          daySlots.push({ datetime: new Date(cursor), time: formatted });
        }
        cursor.setMinutes(cursor.getMinutes() + 30);
      }
      slots.push(daySlots);
    }

    setDocSlots(slots);
  }, [docInfo]);

  // Handle booking
  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Please log in to book');
      navigate('/login');
      return;
    }
    const chosen = docSlots[slotIndex][0].datetime;
    const key = `${chosen.getDate()}_${chosen.getMonth()+1}_${chosen.getFullYear()}`;

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate: key, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getDoctosData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!docInfo) return null;

  return (
    <div className="relative z-10 pt-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-teal-50 to-white min-h-screen">
      {/* Doctor Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeInUp}>
          <div className="relative w-64 h-64 rounded-3xl overflow-hidden bg-gradient-to-tr from-teal-200 to-blue-100 shadow-xl">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex-1 bg-white/50 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
            {docInfo.name}
            <img src={assets.verified_icon} alt="verified" className="w-6 h-6" />
          </h2>
          <p className="mt-2 text-gray-600 flex items-center gap-4">
            <span>
              {docInfo.degree} — {docInfo.speciality}
            </span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm text-sm rounded-full">
              {docInfo.experience}
            </span>
          </p>
          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-1">
              About <img src={assets.info_icon} alt="" className="w-4 h-4" />
            </h3>
            <p className="text-gray-600">{docInfo.about}</p>
          </div>
          <p className="mt-6 text-xl font-medium text-gray-800">
            Fee: <span className="text-teal-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Booking Slots */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Booking Slots</h3>

        {/* Days Selector */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {docSlots.map((daySlots, i) => (
            <div
              key={i}
              onClick={() => setSlotIndex(i)}
              className={`
                snap-center flex-shrink-0 w-20 py-6 text-center rounded-xl cursor-pointer transition-all duration-200
                ${i === slotIndex
                  ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-800'}
              `}
            >
              <p className="font-semibold">{daysOfWeek[daySlots[0]?.datetime.getDay()]}</p>
              <p className="mt-1 text-lg">{daySlots[0]?.datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Times Selector */}
        <div className="mt-4 flex gap-3 overflow-x-auto snap-x snap-mandatory py-2">
          {docSlots[slotIndex]?.map((s, i) => (
            <button
              key={i}
              onClick={() => setSlotTime(s.time)}
              className={`
                snap-center flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${s.time === slotTime
                  ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-800'}
              `}
            >
              {s.time.toLowerCase()}
            </button>
          ))}
        </div>

        {/* Book Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            bookAppointment();
          }}
          disabled={!slotTime}
          className={`
            mt-8 w-full md:w-auto px-12 py-3 rounded-full text-lg font-semibold transition-all duration-200
            ${slotTime
              ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:scale-105 shadow-lg'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
          `}
        >
          {slotTime ? 'Book Appointment' : 'Select a Time'}
        </button>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
    </div>
  );
};

export default Appointment;
