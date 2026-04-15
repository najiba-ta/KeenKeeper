"use client";

import { useInteractions } from "@/context/InteractionContext";
import Image from "next/image";
import { useState } from "react";
import { FaCommentDots, FaPhoneAlt, FaVideo } from "react-icons/fa";
const TimelinePage = () => {
    const { interactions } = useInteractions();
    const [filter, setFilter] = useState("All");
    const filteredInteractions = interactions
        .filter(item => filter === "All" || item.type.toLowerCase() === filter.toLowerCase())
        .sort((a, b) => b.id - a.id);


    const getIcon = (type) => {
        switch (type.toLowerCase()) {
            case 'call': return <FaPhoneAlt className="text-gray-600" />;
            case 'text': return <FaCommentDots className="text-gray-600" />;
            case 'video': return <FaVideo className="text-gray-600" />;
            default: return <FaCommentDots className="text-gray-600" />;
        }};
    return (
        <div className="container my-10 mx-auto p-10 bg-[#F8FAFC] ">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Timeline</h2>

            <div className="mb-6 flex items-center gap-2">
                <div className="relative">
                    <select 
                        onChange={(e) => setFilter(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer shadow-sm"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Texts</option>
                        <option value="Video">Videos</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

            {filteredInteractions.length === 0 ? (
                <div className="text-center p-10 bg-white rounded-lg border">
                    <p className="text-gray-500">No {filter !== "All" ? filter : ""} interactions found.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredInteractions.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-lg shadow-sm"
                        >
                            <div className="text-2xl p-3 bg-gray-50 rounded-lg">
                                {getIcon(item.type)}
                            </div>
                           

                            <div>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold text-gray-900">{item.type}</span> 
                                    <span className="text-gray-500 mx-1">with</span> 
                                    <span className="font-semibold text-gray-900">{item.name}</span>
                                </p>
                                <p className="text-sm text-gray-400 mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>)
};

export default TimelinePage;