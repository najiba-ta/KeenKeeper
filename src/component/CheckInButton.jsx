"use client"; 

import { useInteractions } from "@/context/InteractionContext";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';

const CheckInButton = ({friendName,picture}) => {
    const { addInteraction } = useInteractions();

    const handleAction = (type) => {
        addInteraction(friendName, type, picture);
        toast.success(`${type} interaction recorded!`);
    };

    return (
        <div className='grid grid-cols-3 gap-3 mt-10'>
            <button 
                onClick={() => handleAction('Call')}
                className='card shadow-sm border border-gray-100 p-4 text-center hover:bg-green-50 transition-colors cursor-pointer flex flex-col items-center gap-2'>
                <FaPhoneAlt className="text-green-600" />
                <span className="text-sm font-medium">Call</span>
            </button>
            <button 
                onClick={() => handleAction('Text')}
                className='card shadow-sm border border-gray-100 p-4 text-center hover:bg-blue-50 transition-colors cursor-pointer flex flex-col items-center gap-2'>
                <FaCommentDots className="text-blue-600" />
                <span className="text-sm font-medium">Text</span>
            </button>
            <button 
                onClick={() => handleAction('Video')}
                className='card shadow-sm border border-gray-100 p-4 text-center hover:bg-purple-50 transition-colors cursor-pointer flex flex-col items-center gap-2'>
                <FaVideo className="text-purple-600" />
                <span className="text-sm font-medium">Video</span>
            </button>
        </div>
    );
};

export default CheckInButton;