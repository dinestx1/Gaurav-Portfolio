// components/ProjectCard.jsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { formatTimeline } from '@/lib/utils';
const ProjectCard = ({ project }) => {
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

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[project.publicationStatus]}`}>
          {statusText[project.publicationStatus]}
        </div>
        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
          project.openCollaboration === true 
            ? "bg-blue-100 text-blue-800" 
            : "bg-gray-100 text-gray-800"
        }`}>
          {project.openCollaboration === true ? "Open for Collaboration" : "Collaboration Closed"}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      
      <div className="mt-4 mb-6">
      <div className="text-xs text-gray-500 mb-2">
  Timeline: {formatTimeline(project.startDate, project.endDate, project.isOngoing)}
</div>
        <div className="text-xs font-medium text-gray-700 mb-1">Partners:</div>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.partners.map((partner, idx) => (
            <span 
              key={idx} 
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link 
          href={`/projects/${project.paperId}`}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
        >
          View Full Details
          <FiArrowUpRight className="w-4 h-4" />
        </Link>
        
        {project.collaboration === "open" && (
          <button 
            onClick={() => console.log(`Request collaboration for ${project.id}`)}
            className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
          >
            <FiMail className="w-4 h-4" />
            Request Collaboration
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;