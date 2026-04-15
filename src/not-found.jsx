"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          404
        </motion.h1>

        {/* Floating Image */}
        <motion.img
          src="https://illustrations.popsy.co/gray/web-error.svg"
          alt="404 illustration"
          className="w-80 mx-auto my-6"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300"
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition shadow-lg"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  //  ami najibas
  );
}
