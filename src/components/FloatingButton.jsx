"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {/* LinkedIn Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="group relative"
      >
        <Link
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg hover:shadow-xl transition-all"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin className="w-4 h-4 text-white" />
        </Link>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          Connect on LinkedIn
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45" />
        </span>
      </motion.div>

      {/* Email Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="group relative"
      >
        <Link
          href="mailto:your.email@example.com"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-orange-500 shadow-lg hover:shadow-xl transition-all"
          aria-label="Send Email"
        >
          <FiMail className="w-4 h-4 text-white" />
        </Link>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          Send me an Email
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45" />
        </span>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;