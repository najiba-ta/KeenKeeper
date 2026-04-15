import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-900 p-20'>
            <h1 className='text-7xl font-bold text-white text-center mb-4'>KeenKeeper</h1>
            <p className='text-1xl text-white text-center mb-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-center text-white text-2xl'>Social Links</p>
            <div className='flex justify-center text-center   gap-4 p-2'>
                <button className='bg-amber-50 rounded-full p-2'><FaFacebook /></button>
                <button className='bg-amber-50 rounded-full p-2'><FaInstagram/></button>
                <button className='bg-amber-50 rounded-full p-2'><FaXTwitter /></button>
            </div>
            <hr className="text-gray-500 mt-15" />
            <div className='flex justify-between mt-6'>
                <p className='text-white'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex text-white gap-6'>
                    <p>Privacy Policy</p>
                    <p> Terms of Service </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;