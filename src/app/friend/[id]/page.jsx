import CheckInButton from '@/component/CheckInButton';
import Image from 'next/image';
import React from 'react';
import { IoArchive } from 'react-icons/io5';
import { MdDelete, MdSnooze } from 'react-icons/md';

const friendsPromise = async function () {
    const res = await fetch("http://localhost:3000/friend.json",{
        cache:"no-store"});

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
        <div className='container mx-auto p-6 lg:p-20'>
            <div className='grid grid-cols-12 gap-6'>

                <div className='grid col-span-4'>
                    <div className='card shadow-md border border-gray-100 p-6 flex flex-col items-center bg-white rounded-xl hover:bg-yellow-50'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={150}
                            height={150}
                            className='rounded-full shadow-lg object-cover'
                            unoptimized={true}
                        />
                        <h3 className='font-bold mt-5 text-xl'>{friend.name}</h3>

                        <div className={`px-4 py-1.5 rounded-full text-white text-[10px] font-bold mt-3
                            ${friend.status === 'overdue' ? 'bg-red-500' :
                                friend.status === 'almost due' ? 'bg-yellow-500' : 'bg-green-600'}`}>
                            {friend.status.replace('-', ' ')}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className='mt-6 text-sm text-gray-500 text-center border-t pt-4 w-full'>
                            <p>{friend.bio}</p>
                            <p className="mt-2 font-medium">{friend.email}</p>
                        </div>
                        <div className='w-full'>
                            <div className='card shadow-md border border-gray-100 p-4 flex flex-row items-center gap-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 justify-center my-3'>
                            <MdSnooze className="text-xl text-yellow-600" />
                            <span className="text-sm font-medium">Snooze 2 Weeks</span>
                        </div>
                        <div className='card shadow-md border border-gray-100 p-4 flex flex-row items-center justify-center gap-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 my-3'>
                            <IoArchive className="text-xl text-blue-600" />
                            <span className="text-sm font-medium">Archive</span>
                        </div>
                        <div className='card shadow-md border border-gray-100 p-4 flex flex-row items-center justify-center gap-3 bg-white rounded-xl cursor-pointer hover:bg-red-50 my-3'>
                            <MdDelete className="text-xl text-red-600" />
                            <span className="text-sm font-medium">Delete</span>
                        </div>
                        </div>
                    </div>
                </div>


                <div className='grid col-span-8 gap-4'>

                    <div className='card shadow-md border border-gray-100 p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-2xl font-bold text-green-600">{friend.days_since_contact}</p>
                        <p className='text-gray-500 text-sm'>Days Since Contact</p>
                    </div>
                    <div className='card shadow-md border border-gray-100 p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-2xl font-bold text-blue-600">{friend.goal}</p>
                        <p className='text-gray-500 text-sm'>Goal (Days)</p>
                    </div>
                    <div className='card shadow-md border border-gray-100 p-5 flex flex-col items-center justify-center bg-white rounded-xl hover:bg-yellow-50'>
                        <p className="text-2xl font-bold text-purple-600">{friend.next_due_date}</p>
                        <p className='text-gray-500 text-sm'>Next Due</p>
                    </div>

                    <div className='md:col-span-3 card shadow-md border border-gray-100 p-5 flex flex-row justify-between items-center bg-white rounded-xl hover:bg-yellow-50'>
                        <div>
                            <p className='font-bold text-gray-800'>Relationship Goal</p>
                            <p className='text-gray-500'>Connect every <span className='font-bold text-gray-700'>{friend.goal} days</span></p>
                        </div>
                        <button className='btn btn-ghost bg-purple-50 hover:bg-purple-100 text-purple-700'>Edit</button>
                    </div>

                    <div className='md:col-span-3 card shadow-md border border-gray-100 p-6 bg-white rounded-xl'>
                        <p className='mb-4 font-bold'>Quick Check-In</p>
                        <CheckInButton friendName={friend.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;