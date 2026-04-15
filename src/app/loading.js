'use client'
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-base-100 min-h-screen">
       
     
       <span className="loading loading-spinner loading-lg text-primary"></span>
       
       <h2 className="mt-4 text-2xl font-bold text-gray-600 animate-pulse">
         Processing...
       </h2>
       
    </div>
  );
};

export default Loading;