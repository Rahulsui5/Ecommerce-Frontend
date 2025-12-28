import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Search } from "lucide-react";
import {motion} from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-4"
      >
        <ShoppingBag className="w-20 h-20 text-[#007070]" />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl font-extrabold text-gray-800"
      >
        404
      </motion.h1>

      <p className="mt-4 text-lg text-gray-600 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-sm text-gray-500">
        Need help? <span className="text-[#007070] font-semibold cursor-pointer">Contact Support</span>
      </p>
    </div>
  );
}
