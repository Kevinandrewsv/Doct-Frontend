import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
    const navigate = useNavigate();

    // Framer Motion variants for animated elements
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        },
    };

    return (
        <motion.div
            className='flex flex-col md:flex-row bg-gradient-to-r from-teal-500 via-emerald-600 to-green-700 rounded-3xl p-6 md:p-8 lg:p-10 my-12 md:mx-10 shadow-2xl transition-all duration-300 overflow-hidden relative'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* ------- Left Side (Text & Button) ------- */}
            <div className='flex-1 py-4 md:py-8 lg:py-10 z-10'>
                <motion.div variants={itemVariants} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-2 sm:mt-4'>With <span className='text-yellow-200'>100+ Trusted Doctors</span></p>
                </motion.div>
                <motion.button 
                    variants={itemVariants}
                    onClick={() => { 
                        navigate('/login'); 
                        window.scrollTo(0, 0); 
                    }}
                    className='bg-white text-sm sm:text-base text-teal-700 font-semibold px-8 py-4 rounded-full mt-6 md:mt-8 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl'
                >
                    Create account
                </motion.button>
            </div>

            {/* ------- Right Side (Image) ------- */}
            <motion.div 
                className='hidden md:block md:w-1/2 lg:w-2/5 relative'
                variants={itemVariants}
            >
                <img 
                    className='w-full absolute -bottom-12 right-0 lg:-right-4 max-w-[18rem] md:max-w-xs transition-transform duration-300 transform-gpu hover:scale-105 hover:translate-x-2' 
                    src={assets.appointment_img}
                    alt="Doctor holding a tablet"
                />
            </motion.div>
        </motion.div>
    );
};

export default Banner;