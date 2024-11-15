import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-6 sm:px-10 py-20 bg-gray-50">

      {/* Contact Header Section */}
      <div className="text-center text-4xl font-semibold text-gray-800 mb-16">
        <p>CONTACT <span className="text-primary">US</span></p>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/2 text-sm md:text-base">

          {/* Office Info */}
          <div className="mb-8">
            <p className="font-semibold text-lg text-gray-700">OUR OFFICE</p>
            <p className="text-gray-600">65, pulavaikal road<br /> saidapet, chennai-600023</p>
            <p className="text-gray-600">Cell: +91 999405032<br /> Email: doct@gmail.com</p>
          </div>

          {/* Careers Info */}
          <div className="mb-8">
            <p className="font-semibold text-lg text-gray-700">CAREERS AT DOCT</p>
            <p className="text-gray-600">Learn more about our teams and job openings.</p>
            <button className="mt-6 py-3 px-10 bg-primary text-white text-sm font-medium rounded-full border border-primary hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105">
              Explore Jobs
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
