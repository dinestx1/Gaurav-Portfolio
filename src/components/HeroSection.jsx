"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/40 to-purple-400/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/40 to-orange-400/20 dark:from-pink-800/20 dark:to-orange-800/20 rounded-full animate-pulse delay-1000" />
        
        {/* Floating Particles */}
        <div className="absolute top-0 left-0 w-14 h-14 bg-gradient-to-br from-fuchsia-300/20 to-pink-300/20 dark:from-fuchsia-600/20 dark:to-pink-600/20 rounded-full animate-float" />
        <div className="absolute bottom-0 right-0 w-18 h-18 bg-gradient-to-br from-lime-300/15 to-green-300/15 dark:from-lime-600/15 dark:to-green-600/15 rounded-full animate-float-reverse" />
        
        {/* Pulsing Elements */}
        <div className="absolute top-10 left-1/3 w-16 h-16 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 dark:from-teal-600/20 dark:to-cyan-600/20 rounded-full animate-ping-slow" />
        <div className="absolute bottom-20 left-1/5 w-12 h-12 bg-gradient-to-br from-rose-300/20 to-pink-300/20 dark:from-rose-600/20 dark:to-pink-600/20 rounded-full animate-ping-slow-delay" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full pt-24">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8 relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Gourav Aggarwal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            Innovator & Tech Entrepreneur | Bridging Research with Industry Solutions
          </p>
          
          <motion.div 
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          <Link href="/projects">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white px-8 py-6 text-lg font-medium rounded-xl
                        hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700 
                        transition-all duration-300  hover:shadow-2xl"
            >
              Explore My Work
            </Button>
            </Link>
            {/* <Button 
              variant="outline"
              className="border-1  border-gray-300 text-gray-800 bg-transparent dark:text-gray-300 px-8 py-6 text-lg font-medium rounded-xl
                    
                        transition-all duration-300  hover:shadow-sm hover:bg-gray-300 hover:dark:bg-gray-800"
            >
              Schedule Consultation
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
    className="relative mx-auto h-[50vh] sm:h-[60vh] lg:h-[80vh] max-w-2xl flex items-center justify-center mt-8 lg:mt-0"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {/* Image Container */}
    <div className="relative h-full w-full group">
      {/* Responsive Image */}
      <img 
        src="gourav.png" 
        alt="Professional Portrait" 
        className="h-full w-full object-cover object-center lg:object-bottom rounded-tl-[3rem] rounded-tr-[3rem] 
                  sm:rounded-tl-[4rem] sm:rounded-tr-[4rem] border-4 sm:border-8 border-white/40 
                  dark:border-gray-800/30 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all 
                  duration-300 group-hover:scale-[1.01]"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 98%)'
        }}
      />
      
      {/* Floating Particles - Optimized for Performance */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
      </div>

      {/* Grid Overlay */}
 
    </section>
  );
};

export default HeroSection;