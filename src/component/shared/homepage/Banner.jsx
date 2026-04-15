import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='pt-20'>
            <h2 className='text-5xl text-center font-bold mb-4'>Friends to keep close in your life</h2>
            <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <div className='flex justify-center mt-6'>
                    <button className='btn bg-green-900 text-white'><FaPlus />Add a Friend</button>
                </div>
        </div>
    );
};

export default Banner;