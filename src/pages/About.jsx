import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gray-50 px-6 sm:px-12 lg:px-20 py-16">
      {/* About Us Section */}
      <div className="text-center text-3xl font-bold text-gray-800">
        <p>ABOUT <span className="text-teal-500">US</span></p>
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center gap-12">
        <img
          className="w-full md:max-w-md rounded-lg shadow-md transition-transform duration-300 transform hover:scale-102" // Subtle zoom effect
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-base text-gray-700 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-teal-500">Doct</span>, your trusted companion for managing healthcare needs effortlessly. 
            Our mission is to simplify access to medical care, ensuring you spend less time worrying and more time focusing on your health.
          </p>
          <p>
            At <span className="font-semibold text-teal-500">Doct</span>, we bring innovation to healthcare technology. From booking appointments to managing health records, we’re committed to delivering an efficient and seamless user experience. With every interaction, our platform is designed to empower you and enhance your healthcare journey.
          </p>
          <div>
            <b className="text-gray-800 text-xl">Our Vision</b>
            <p>
              We aim to bridge the gap between patients and healthcare providers, creating a connected and accessible healthcare ecosystem. Our goal is simple: to ensure you have access to the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-2xl font-bold my-12 text-gray-800">
        <p>WHY <span className="text-teal-500">CHOOSE US</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-8 sm:p-12 rounded-lg text-center hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2 shadow-lg cursor-pointer">
          <b className="text-lg">EFFICIENCY</b>
          <p className="mt-4">
            Streamlined appointment scheduling that adapts to your busy lifestyle, saving you time and effort.
          </p>
        </div>
        <div className="border p-8 sm:p-12 rounded-lg text-center hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2 shadow-lg cursor-pointer">
          <b className="text-lg">CONVENIENCE</b>
          <p className="mt-4">
            Easy access to a network of trusted healthcare professionals right in your area, anytime you need.
          </p>
        </div>
        <div className="border p-8 sm:p-12 rounded-lg text-center hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2 shadow-lg cursor-pointer">
          <b className="text-lg">PERSONALIZATION</b>
          <p className="mt-4">
            Tailored healthcare recommendations and timely reminders to keep your well-being on track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
