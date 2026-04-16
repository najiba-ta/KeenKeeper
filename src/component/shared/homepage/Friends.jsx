import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const friendsPromise = async function () {
    const res = await fetch("http://localhost:3000/friend.json");
    const friend = await res.json();
    return friend;
};

const Friends = async () => {
    const friends = await friendsPromise();
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === 'on-track').length;
    const needAttenionCount = friends.filter(f =>f.status === 'overdue' || f.status === 'almost due').length;
    const totalIntaraction = 10;
    return (
       <div className='container mx-auto my-[60px] px-4'>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='g-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50'>
                    <h3 className='text-3xl font-bold text-gray-800'>{totalFriends}</h3>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-3xl font-bold text-green-600">{onTrackCount}</h3>
                    <p className="text-gray-500 text-sm">On Track</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-3xl font-bold text-orange-500">{needAttenionCount}</h3>
                    <p className="text-gray-500 text-sm">Need Attention</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:bg-blue-50">
                    <h3 className="text-3xl font-bold text-purple-600">{totalIntaraction}</h3>
                    <p className="text-gray-500 text-sm">Interactions This Month</p>
                </div>

            </div>
               
       <div className='container mx-auto my-16 px-4'>
    <h2 className='text-3xl font-bold mb-8 text-center md:text-left'>Your Friends</h2>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {friends.map((friend) => (
            <Link href={`/friend/${friend.id}`} key={friend.id} className="group">
                <div className='card shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 bg-white rounded-2xl h-full flex flex-col items-center text-center hover:bg-purple-50'>
                    
                   
                    <div className='mb-4'>
                        <Image 
                            src={friend.picture}
                            alt={friend.name}
                            className="rounded-full bg-amber-50 object-cover"
                            width={100}
                            height={100}
                            unoptimized={true} 
                        />
                    </div>

                    <h3 className='text-xl font-bold text-gray-800'>{friend.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 italic">
                        {friend.days_since_contact} days ago
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                        {friend.tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className='mt-auto w-full flex justify-center'>
                        <div className={`px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider
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