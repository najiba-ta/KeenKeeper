"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 font-medium ${
        isActive
          ? "text-white bg-green-900"
          : "text-gray-600 hover:text-black hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default MyLink;