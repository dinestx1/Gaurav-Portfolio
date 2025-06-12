import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import ConnectModal from './ConnectModel';
import Link from 'next/link';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navItems = ['About', 'Projects', 'Gallery'];

  return (
    <div>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md text-gray-600 border-gray-100 shadow-sm dark:bg-gray-900/90 dark:border-gray-800 dark:text-gray-300"
            : "bg-transparent border-transparent text-gray-500 "
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  Gourav Aggarwal
                </span>
              </motion.div>
            </Link>

            <div className="flex items-center gap-6">
              {/* Theme Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? (
                  <FiSun className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative transition-colors font-medium group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full dark:bg-purple-400" />
                  </Link>
                ))}
              </nav>

              {/* Desktop Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block"
              >
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 
                           px-6 shadow-lg hover:shadow-xl transition-all rounded-lg dark:from-blue-700 dark:to-purple-700"
                  onClick={() => setIsModalOpen(true)}
                >
                  Let's Connect
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Now placed outside the header */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            
            {/* Drawer from right */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden"
            >
              <div className="p-5 h-full flex flex-col">
                {/* Close button at top-right */}
                <div className="flex justify-end">
                  <button 
                    onClick={() => setIsMobileOpen(false)} 
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Menu content */}
                <div className="flex-1 px-4 py-4 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Theme Toggle - Mobile */}
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {isDarkMode ? (
                        <>
                          <FiSun className="w-5 h-5" />
                          <span className="font-medium">Light Mode</span>
                        </>
                      ) : (
                        <>
                          <FiMoon className="w-5 h-5" />
                          <span className="font-medium">Dark Mode</span>
                        </>
                      )}
                    </button>

                    {/* Navigation Links */}
                    {navItems.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="block py-3 px-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>

                  {/* Connect Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:from-blue-700 dark:to-purple-700"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMobileOpen(false);
                    }}
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;