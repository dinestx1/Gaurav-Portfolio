"use client";
import React from 'react';
import { useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from "react-icons/fi";

import { FiBriefcase, FiBook, FiUser,FiUsers, FiAward, FiStar, FiChevronRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWorks } from '@/store/slices/authSlice';
const AboutPage = () => {


  const {works}=useSelector((state)=>state.auth);
   
  const dispatch =useDispatch()

 console.log(works)
  useEffect(()=>{
   dispatch(getWorks())
  },[dispatch])




  const [showFull, setShowFull] = useState(false);

  const toggleReadMore = () => setShowFull(!showFull);

  const fullText = `I am Gourav Aggarwal, founder of The Growth Vibes, a platform dedicated to empowering entrepreneurs with comprehensive support for launching and scaling startups. With over seven years of experience in entrepreneurship, teaching, and mentorship, I guide founders in ideation, strategic planning, market research, go-to-market strategies, and growth.
As a Senior Research Fellow at IIT Delhi’s Department of Management Studies, I research India’s entrepreneurial ecosystem to drive innovation. My Master’s in Finance and Accounting from Shri Ram College of Commerce, University of Delhi (2018), provides critical financial expertise for startups. Since founding D&G Academy in 2017, I’ve nurtured entrepreneurial talent. As a mentor with Delhi Angels Den, MicroMentor, and IIT Bombay’s e-Cell, I support aspiring entrepreneurs. Currently, as Head of Academics at ThinkStartup, I inspire school students to develop entrepreneurial skills.

My mission is to build a vibrant, inclusive startup ecosystem in India, transforming ideas into impactful ventures through The Growth Vibes, research, and mentorship.`;

  const shortText = fullText.slice(0, 300) + "...";




  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" mb-20  mx-auto"
        >
          <h1 className="text-3xl text-center lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          My Entrepreneurial Journey
          </h1>
          <p className="text-md text-gray-600 leading-relaxed whitespace-pre-line">
        {showFull ? fullText : shortText}
      </p>
      <button
        onClick={toggleReadMore}
        className="mt-2 text-blue-600 font-medium hover:underline focus:outline-none"
      >
        {showFull ? "Read Less" : "Read More"}
      </button>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 hidden lg:block h-full" />
          
          <div className="grid lg:grid-cols-2 lg:gap-x-12 gap-y-8">
            {works.map((exp, index) => (
              
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
              >
               

                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-lg bg-purple-200 flex-shrink-0`}>
                      <FiBriefcase className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
                      <p className='flex gap-1'>
                      <p className="text-xs text-gray-400">
    {new Date(exp.startDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })}{" "}
    -{" "}
    {exp.endDate
      ? new Date(exp.endDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })
      : "Present"}
  </p>
                      <p className="text-xs text-gray-400 ">(
  {exp.experience?.years > 0 && `${exp.experience.years} year${exp.experience.years > 1 ? 's' : ''} `}
  {exp.experience?.months > 0 && `${exp.experience.months} month${exp.experience.months > 1 ? 's' : ''}`})
</p></p>
                    </div>
                  </div>

                  <div className="pl-4 border-l-2 border-blue-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Milestones:</h4>
                    <ul className="space-y-2 text-gray-600">
                      {exp.keyMilestones.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm leading-snug">
                          <FiChevronRight className="text-blue-500 mt-1 flex-shrink-0 w-4 h-4" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-gray-200">Entrepreneurs Mentored</p>
          </div>
          <div className="bg-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-gray-200">Programs Conducted</p>
          </div>
          <div className="bg-green-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">80%</h3>
            <p className="text-gray-200">Success Rate</p>
          </div>
        </motion.div>

        {/* Education & Skills */}
        <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Academic Credentials */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
              <FiBook className="text-blue-600" />
              Academic Journey
            </h2>

            <div className="space-y-4">
              {/* Doctoral */}
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <FiAward className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Ph.D in Entrepreneurial Ecosystems</h3>
                    <p className="text-xs text-gray-500">IIT Delhi • 2020 - Present</p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-600">
                      <li>• Junior → Senior Research Fellow</li>
                      <li>• Published 5+ research papers</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* M.Com */}
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <FiBook className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">M.Com (Accounting & Finance)</h3>
                    <p className="text-xs text-gray-500">Shri Ram College of Commerce • 2016 - 2018</p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-600">
                      <li>• All India Rank 28 in Entrance</li>
                      <li>• Rotaract Club Member</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Professional Qualifications */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
              <FiBriefcase className="text-green-600" />
              Professional Development
            </h2>

            <div className="space-y-4">
              {/* CA */}
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <FiUser className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">CA Intermediate</h3>
                    <p className="text-xs text-gray-500">ICAI • 2013 - 2016</p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-600">
                      <li>• Distinction in Financial Accounting</li>
                      <li>• Completed Article-ship Training</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Coaching */}
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <FiAward className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Freelance Mentor</h3>
                    <p className="text-xs text-gray-500">2013 - Present</p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-600">
                      <li>• 10+ years coaching experience</li>
                      <li>• Specialized in academic & career mentoring</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
            <FiStar className="text-yellow-500" />
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'Startup Mentorship', 'Curriculum Design', 
              'Research Analysis', 'Entrepreneurship Training',
              'Academic Coaching', 'Financial Strategy',
              'Workshop Facilitation', 'Leadership Development'
            ].map((skill, index) => (
              <div 
                key={index}
                className="px-3 py-1.5 bg-white text-xs font-medium text-gray-700 rounded-full border border-gray-200 hover:bg-blue-50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
      </div>
    </section>
  );
};

export default AboutPage;