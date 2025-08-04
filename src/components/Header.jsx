import React from 'react';
import { assets } from '../assets/assets';

const Header = () => (
  <section className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-sky-100 via-white to-teal-50 rounded-xl shadow-lg overflow-hidden my-16">
    {/* --------- Left: Image --------- */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start p-8 md:p-12">
      <img
        src={assets.header_img}
        alt="Doctor"
        className="w-80 md:w-[28rem] lg:w-[32rem] h-auto object-cover rounded-lg"
      />
    </div>

    {/* --------- Right: Text & Button --------- */}
    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Your Health, Our Priority. <br />
        Trusted Doctors, Just a Click Away.
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        Instant appointments, secure consultations, and personalized care plans—right
        from the comfort of your home.
      </p>
     <a
  href="#speciality"
  className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
>
  Book Appointment
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

    </div>
  </section>
);

export default Header;
