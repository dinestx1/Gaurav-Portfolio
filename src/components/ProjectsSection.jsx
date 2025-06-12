"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGitBranch, FiBriefcase, FiBook, FiUsers } from 'react-icons/fi';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { formatTimeline } from '@/lib/utils';
const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  
  const {papers}=useSelector((state)=>state.auth);

  const projects = papers;
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const statusColors = {
    published: "bg-green-100 text-green-800",
    draft: "bg-blue-100 text-blue-800",
    completed: "bg-gray-100 text-gray-800"
  };

  const statusText = {
    published: "Published",
    draft: "Draft",
    completed: "Completed"
  };

  const openCollaboration = {
    true: {
      text: "Open for Collaboration",
      bg: "bg-blue-100 border-blue-300 text-blue-800"
    },
    false: {
      text: "Collaboration Closed",
      bg: "bg-gray-100 border-gray-300 text-gray-800"
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Research Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Current and completed initiatives exploring entrepreneurial ecosystems and innovation policy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {projects.slice(0, showMore ? 4 : 2).map((project, i) => (
            <motion.div
              key={project.paperId}
              custom={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity ${project.gradient}`} />
                <div className="p-6">
                  <div className="flex flex-wrap justify-between gap-4 mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.publicationStatus]}`}>
                      {statusText[project.publicationStatus]}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${openCollaboration[project.openCollaboration].bg} ${openCollaboration[project.openCollaboration].bg}`}>
                      {openCollaboration[project.openCollaboration].text}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                 
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Partners:</p>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {project.partners.map((partner, idx) => (
                              <span 
                                key={idx} 
                                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Timeline:</p>
                          <p className="text-gray-600 dark:text-gray-400"> {formatTimeline(project.startDate, project.endDate, project.isOngoing)}</p>
                        </div>
                      </div>
                      <Link href={`/projects/${project.paperId}`}>
                      <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                        <span>View Project Details</span>
                        <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-4">
        <Link href='/projects'>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow">
            Explore All Research Projects
            <FiGitBranch className="inline-block ml-2 w-5 h-5" />
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;