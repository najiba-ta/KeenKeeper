"use client";

import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      
      <Image
        src="/notfound.jpg"
        alt="Not Found"
        width={400}
        height={400}
      />

      <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="text-gray-500">Oops! This page doesn’t exist.</p>
    </div>


  );
}
