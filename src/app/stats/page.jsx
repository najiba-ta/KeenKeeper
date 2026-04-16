"use client";
import { useInteractions } from '@/context/InteractionContext';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatPage = () => {
    const { interactions } = useInteractions();
    const textCount = interactions.filter(i => i.type === 'Text' || i.type === 'text').length;
    const callCount = interactions.filter(i => i.type === 'Call' || i.type === 'call').length;
    const videoCount = interactions.filter(i => i.type === 'Video' || i.type === 'video').length;
    const data = [
        { name: 'Text', value: textCount, fill: '#A855F7' },
        { name: 'Call', value: callCount, fill: '#2C4C3B' },
        { name: 'Video', value: videoCount, fill: '#22C55E' }
    ];

    const total = interactions.length;
return (
        <div className='container mx-auto p-7'>
            <h2 className='text-4xl font-bold mb-10 text-center'>Friendship Analytics</h2>
            
            <div className='card shadow-2xl p-10 bg-white rounded-2xl border border-gray-100 max-w-3xl mx-auto hover:bg-blue-50'>
                <h2 className='text-2xl text-gray-400 font-semibold mb-10 text-center'>
                    By Interaction Type
                </h2>
                
                <div className='w-full h-[400px]'>
                    {total === 0 ? (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            No interactions recorded yet. Go to friend details to add some!
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="75%" // 
                                    outerRadius="100%"
                                    cornerRadius={10}
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    formatter={(value) => [`${value} times`, `${((value / total) * 100).toFixed(1)}%`]}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    )}
                </div>
                
                <div className='mt-10 grid grid-cols-3 gap-4 border-t pt-8'>
                    <div className='text-center'>
                        <p className='text-gray-400 text-sm'>Total Texts</p>
                        <p className='text-xl font-bold text-purple-600'>{textCount}</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-400 text-sm'>Total Calls</p>
                        <p className='text-xl font-bold text-emerald-900'>{callCount}</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-400 text-sm'>Total Videos</p>
                        <p className='text-xl font-bold text-green-600'>{videoCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatPage;