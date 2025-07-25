"use client"
import React, { useRef,useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiMic, FiBook, FiUsers, FiCalendar, FiTool, FiStar } from 'react-icons/fi';
import { useDispatch,useSelector } from 'react-redux';
import { getEvents } from '@/store/slices/authSlice';



const EventsSection = () => {

 
  const {events}=useSelector((state)=>state.auth);
   
  const dispatch =useDispatch()


  useEffect(()=>{
   dispatch(getEvents())
  },[dispatch])



  const getEventIcon = (type) => {
    const iconMap = {
      'award': <FiAward className="w-6 h-6" />,
      'keynote': <FiMic className="w-6 h-6" />,
      'collaboration': <FiUsers className="w-6 h-6" />,
      'workshop': <FiTool className="w-6 h-6" />,
      'conference': <FiBook className="w-6 h-6" />,
      // Add more mappings as needed
    };
    
    return iconMap[type] || <FiStar className="w-6 h-6" />; // Default icon
  };


  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

 

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
        Events & Activities
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
        Notable participations and achievements in the tech community
      </p>
    </motion.div>

    <div className="relative overflow-hidden py-8 group">
      <div className="flex gap-8 animate-marquee whitespace-nowrap hover:animation-pause">
        {[...events, ...events].map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="inline-block w-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl 
                       border border-gray-100 dark:border-gray-700 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  event.type === 'Award' ? 
                    'bg-green-100 text-green-600 dark:bg-green-800/20 dark:text-green-400' :
                  event.type === 'Keynote' ? 
                    'bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400' :
                  event.type === 'Collaboration' ?
                    'bg-orange-100 text-orange-600 dark:bg-orange-800/20 dark:text-orange-400' :
                    'bg-blue-100 text-blue-600 dark:bg-blue-800/20 dark:text-blue-400'
                }`}>
                  {getEventIcon(event.eventType)}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {event.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCalendar className="w-4 h-4" />
                {formatDate(event.date)}
                <p>
                  {event.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-20" />
    </div>

    <style jsx global>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
        display: inline-flex;
      }
      .hover\:animation-pause:hover {
        animation-play-state: paused;
      }
    `}</style>
  </div>
</section>
  );
};

export default EventsSection;