import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-200 to-teal-300 rounded-lg px-10 md:px-20 lg:px-32 py-14 md:py-28 my-16 md:my-28 shadow-lg'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-8 text-center md:text-left'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold leading-snug'>
                    Your Health, Our Priority. <br /> Connect with Trusted Doctors Today.
                </p>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-10 py-4 rounded-full text-gray-700 text-base shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
                    Book appointment <img className='w-4' src={assets.arrow_icon} alt="Arrow icon" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 flex items-center justify-center py-6 md:py-0 relative'>
                <div className='relative group'>
                    {/* Image with Hover Glow */}
                    <img 
                        className='w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(56,178,172,0.7)]' 
                        src={assets.header_img} 
                        alt="Doctor Image" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
