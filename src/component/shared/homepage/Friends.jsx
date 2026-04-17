import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const friendsPromise = async function () {
    const res = await fetch("https://keen-keeper-theta-one.vercel.app/friend.json");
    // const res = await fetch("http://localhost:3000/friend.json");
    const friend = await res.json();
    return friend;
};

const Friends = async () => {
    const friends = await friendsPromise();
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === 'on-track').length;
    const needAttenionCount = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;
    const totalIntaraction = 10;

    return (
       <div className='container mx-auto my-10 md:my-[60px] px-4'>
         
         {/* Stats Section */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5'>
                <div className='bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50'>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{totalFriends}</h3>
                    <p className='text-gray-500 text-sm md:text-base'>Total Friends</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-2xl md:text-3xl font-bold text-green-600">{onTrackCount}</h3>
                    <p className="text-gray-500 text-xs md:text-sm">On Track</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-500">{needAttenionCount}</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Need Attention</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{totalIntaraction}</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Interactions This Month</p>
                </div>
            </div>

       {/* Friends Section */}
       <div className='container mx-auto my-12 md:my-16 px-2 md:px-4'>
            <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left'>
                Your Friends
            </h2>
    
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6'>
                {friends.map((friend) => (
                    <Link href={`/friend/${friend.id}`} key={friend.id} className="group">
                        <div className='shadow-md md:shadow-lg p-4 md:p-6 border border-gray-100 hover:shadow-xl transition duration-300 bg-white rounded-2xl h-full flex flex-col items-center text-center hover:bg-purple-50'>
                    
                            <div className='mb-3 md:mb-4'>
                                <Image 
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="rounded-full bg-amber-50 object-cover w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                                    width={100}
                                    height={100}
                                    unoptimized={true} 
                                />
                            </div>

                            <h3 className='text-lg md:text-xl font-bold text-gray-800'>
                                {friend.name}
                            </h3>

                            <p className="text-[10px] md:text-xs text-gray-400 mb-2 md:mb-3 italic">
                                {friend.days_since_contact} days ago
                            </p>

                            <div className="flex flex-wrap gap-1 mb-3 md:mb-4 justify-center">
                                {friend.tags.map((tag, index) => (
                                    <span key={index} className="bg-green-100 text-green-700 text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='mt-auto w-full flex justify-center'>
                                <div className={`px-3 md:px-4 py-1 rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider
                                    ${friend.status === 'overdue' ? 'bg-red-500' :
                                      friend.status === 'almost due' ? 'bg-yellow-500' : 'bg-green-600'}`}>
                                    {friend.status.replace('-', ' ')}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

       </div>
    )
};

export default Friends;