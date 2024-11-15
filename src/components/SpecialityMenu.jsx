import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-8 py-16 text-[#262626] bg-gray-50'>
            {/* Section Title */}
            <h1 className='text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent'>
                Find by Speciality
            </h1>
            <p className='sm:w-2/3 lg:w-1/3 text-center text-base text-gray-600'>
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>

            {/* Speciality List */}
            <div className='flex sm:justify-center gap-6 pt-12 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-200'>
                {specialityData.map((item, index) => (
                    <Link
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 w-28 sm:w-36 bg-white p-2 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-4 transition-transform duration-300'
                        key={index}
                    >
                        <img className='w-16 sm:w-20 mb-3 rounded-full' src={item.image} alt={item.speciality} />
                        <p className='text-gray-700 font-medium text-center'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
