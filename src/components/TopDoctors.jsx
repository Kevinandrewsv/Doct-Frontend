import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

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
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 sm:px-0 pt-8">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
                        className="group relative flex flex-col items-center p-4 border border-[#C9D8FF] rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:translate-y-2 cursor-pointer"
                        key={index}
                    >
                        <img
                            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#EAEFFF] object-cover mb-4 transition-transform group-hover:scale-105"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="flex items-center gap-2 text-xs text-center">
                            <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                            <p className={`font-medium ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                {item.available ? 'Available' : 'Not Available'}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 mt-2">{item.name}</p>
                        <p className="text-sm text-[#5C5C5C]">{item.speciality}</p>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
                View More
            </button>
        </div>
    );
};

export default TopDoctors;
