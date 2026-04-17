import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-900 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 hover:bg-green-950 transition duration-300'>
            
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4'>
                KeenKeeper
            </h1>

            <p className='text-sm sm:text-base md:text-lg text-white text-center mb-4 max-w-2xl mx-auto'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            <p className='text-center text-white text-lg md:text-2xl'>
                Social Links
            </p>

            <div className='flex justify-center gap-4 p-2 mt-2'>
                <button className='bg-amber-50 rounded-full p-2 text-lg'><FaFacebook /></button>
                <button className='bg-amber-50 rounded-full p-2 text-lg'><FaInstagram/></button>
                <button className='bg-amber-50 rounded-full p-2 text-lg'><FaXTwitter /></button>
            </div>

            <hr className="text-gray-500 mt-10 md:mt-14" />

            <div className='flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-center md:text-left'>
                <p className='text-white text-sm md:text-base'>
                    © 2026 KeenKeeper. All rights reserved.
                </p>

                <div className='flex flex-wrap justify-center md:justify-end text-white gap-4 md:gap-6 text-sm md:text-base'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;