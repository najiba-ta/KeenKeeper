import CheckInButton from '@/component/CheckInButton';
import Image from 'next/image';
import React from 'react';
import { IoArchive } from 'react-icons/io5';
import { MdDelete, MdSnooze } from 'react-icons/md';

const friendsPromise = async function () {
  const res = await fetch("https://keen-keeper-theta-one.vercel.app/friend.json");
  // const res = await fetch("http://localhost:3000/friend.json");
  const friend = await res.json();
  return friend;
};

export async function generateMetadata({ params }) {
    const { id } = await params;
    const friends = await friendsPromise();
    const friend = friends.find((f) => String(f.id) === id);

    if (!friend) {
        return { title: `Not-found - KeenKeeper` };
    }
    return { title: `${friend.name} - KeenKeeper` };
}

const page = async ({ params }) => {
    const { id } = await params;
    const friends = await friendsPromise();
    const friend = friends.find((f) => String(f.id) === id);

    if (!friend) return <div className="text-center p-20">Friend not found!</div>;

    return (
        <div className='container mx-auto px-4 py-10 md:p-10 lg:p-20'>
            
            {/* Main Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>

                {/* Left Card */}
                <div className='lg:col-span-4'>
                    <div className='shadow-md border border-gray-100 p-5 md:p-6 flex flex-col items-center bg-white rounded-xl hover:bg-yellow-50'>
                        
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={150}
                            height={150}
                            className='rounded-full shadow-lg object-cover w-[100px] h-[100px] md:w-[150px] md:h-[150px]'
                            unoptimized={true}
                        />

                        <h3 className='font-bold mt-4 md:mt-5 text-lg md:text-xl text-center'>
                            {friend.name}
                        </h3>

                        <div className={`px-3 md:px-4 py-1 rounded-full text-white text-[9px] md:text-[10px] font-bold mt-3
                            ${friend.status === 'overdue' ? 'bg-red-500' :
                                friend.status === 'almost due' ? 'bg-yellow-500' : 'bg-green-600'}`}>
                            {friend.status.replace('-', ' ')}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className='mt-5 text-xs md:text-sm text-gray-500 text-center border-t pt-4 w-full'>
                            <p>{friend.bio}</p>
                            <p className="mt-2 font-medium break-all">{friend.email}</p>
                        </div>

                        {/* Actions */}
                        <div className='w-full mt-4 space-y-2'>
                            <div className='shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 bg-white rounded-xl cursor-pointer hover:bg-gray-50'>
                                <MdSnooze className="text-lg text-yellow-600" />
                                <span className="text-xs md:text-sm font-medium">Snooze 2 Weeks</span>
                            </div>

                            <div className='shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 bg-white rounded-xl cursor-pointer hover:bg-gray-50'>
                                <IoArchive className="text-lg text-blue-600" />
                                <span className="text-xs md:text-sm font-medium">Archive</span>
                            </div>

                            <div className='shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 bg-white rounded-xl cursor-pointer hover:bg-red-50'>
                                <MdDelete className="text-lg text-red-600" />
                                <span className="text-xs md:text-sm font-medium">Delete</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div className='shadow-md border border-gray-100 p-4 md:p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-xl md:text-2xl font-bold text-green-600">{friend.days_since_contact}</p>
                        <p className='text-gray-500 text-xs md:text-sm'>Days Since Contact</p>
                    </div>

                    <div className='shadow-md border border-gray-100 p-4 md:p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-xl md:text-2xl font-bold text-blue-600">{friend.goal}</p>
                        <p className='text-gray-500 text-xs md:text-sm'>Goal (Days)</p>
                    </div>

                    <div className='shadow-md border border-gray-100 p-4 md:p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-xl md:text-2xl font-bold text-purple-600">{friend.next_due_date}</p>
                        <p className='text-gray-500 text-xs md:text-sm'>Next Due</p>
                    </div>

                    <div className='sm:col-span-2 md:col-span-3 shadow-md border border-gray-100 p-4 md:p-5 flex flex-col md:flex-row justify-between items-center gap-3 bg-white rounded-xl hover:bg-yellow-50 text-center md:text-left'>
                        <div>
                            <p className='font-bold text-gray-800'>Relationship Goal</p>
                            <p className='text-gray-500 text-sm'>
                                Connect every <span className='font-bold text-gray-700'>{friend.goal} days</span>
                            </p>
                        </div>
                        <button className='btn btn-ghost bg-purple-50 hover:bg-purple-100 text-purple-700'>
                            Edit
                        </button>
                    </div>

                    <div className='sm:col-span-2 md:col-span-3 shadow-md border border-gray-100 p-5 md:p-6 bg-white rounded-xl'>
                        <p className='mb-4 font-bold text-center md:text-left'>Quick Check-In</p>
                        <CheckInButton friendName={friend.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;