import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ speciality, docId }) => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    const [relDoc, setRelDoc] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="flex flex-col items-center gap-12 my-16 mb-24 bg-gradient-to-r from-teal-200 to-blue-300 py-16 px-6 shadow-lg">
            {/* Section Title */}
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
                Discover Related Doctors
            </h1>
            <p className="sm:w-2/3 lg:w-1/2 text-center text-lg text-gray-800">
                Find trusted professionals related to your selected specialty and book an appointment seamlessly.
            </p>

            {/* Related Doctors List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-screen-xl">
                {relDoc.length > 0 ? (
                    relDoc.map((item, index) => (
                        <div
                            onClick={() => {
                                navigate(`/appointment/${item._id}`);
                                scrollTo(0, 0);
                            }}
                            className="relative bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden cursor-pointer transform transition-all hover:shadow-2xl hover:scale-105 hover:brightness-110"
                            key={index}
                        >
                            {/* Doctor Image */}
                            <div className="relative">
                                <img
                                    className="w-full h-48 object-cover bg-gray-100"
                                    src={item.image || 'https://via.placeholder.com/150'}
                                    alt={item.name}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all"></div>

                                {/* Availability Status Badge */}
                                <div
                                    className={`absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-lg text-white text-sm ${
                                        item.available ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                                >
                                    <span
                                        className={`w-2.5 h-2.5 rounded-full ${
                                            item.available ? 'bg-green-200' : 'bg-red-200'
                                        }`}
                                    ></span>
                                    {item.available ? 'Available' : 'Unavailable'}
                                </div>
                            </div>

                            {/* Doctor Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.speciality}</p>

                                <div
                                    className={`mt-3 flex items-center gap-2 text-sm ${
                                        item.available ? 'text-green-600' : 'text-gray-400'
                                    }`}
                                >
                                    <span
                                        className={`w-3 h-3 rounded-full ${
                                            item.available ? 'bg-green-500' : 'bg-gray-400'
                                        }`}
                                    ></span>
                                    {item.available ? 'Currently Available' : 'Currently Unavailable'}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-lg col-span-full">
                        No related doctors found. Please try a different specialty.
                    </p>
                )}
            </div>

            {/* Optional "View More" Button */}
            <button
                onClick={() => navigate('/doctors')}
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-medium hover:from-teal-600 hover:to-blue-700 hover:shadow-xl transition-all"
            >
                View More Doctors
            </button>
        </div>
    );
};

export default RelatedDoctors;
