// components/layout/ConnectModal.jsx
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaTwitter, 
  FaGithub, 
  FaDiscord,
  FaTimes,
  FaCopy
} from 'react-icons/fa';

const ConnectModal = ({ isOpen, onClose }) => {
  const contactInfo = {
    email: 'contact@example.com',
    phone: '+1 (234) 567-8900',
    whatsapp: '+12345678900',
    linkedin: 'your-linkedin',
    twitter: 'your-twitter',
    github: 'your-github'
  };
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
  <div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0  bg-black/90  z-50  flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-white/30"
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Let's Connect!</h2>
                  <p className="text-indigo-100 mt-1">
                    I'd love to hear from you
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Connection Options */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <ConnectionCard 
                  icon={<FaLinkedinIn size={24} className="text-blue-700" />}
                  title="LinkedIn"
                  value={contactInfo.linkedin}
                  onClick={() => window.open(`https://linkedin.com/in/${contactInfo.linkedin}`, '_blank')}
                  onCopy={() => handleCopy(`https://linkedin.com/in/${contactInfo.linkedin}`)}
                />
                
                {/* Email */}
                <ConnectionCard 
                  icon={<FaEnvelope size={24} className="text-red-500" />}
                  title="Email"
                  value={contactInfo.email}
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  onCopy={() => handleCopy(contactInfo.email)}
                />
                
                {/* Phone */}
                <ConnectionCard 
                  icon={<FaPhone size={24} className="text-green-600" />}
                  title="Phone"
                  value={contactInfo.phone}
                  onClick={() => window.location.href = `tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  onCopy={() => handleCopy(contactInfo.phone)}
                />
                
                {/* WhatsApp */}
                <ConnectionCard 
                  icon={<FaWhatsapp size={24} className="text-green-500" />}
                  title="WhatsApp"
                  value={contactInfo.whatsapp}
                  onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
                  onCopy={() => handleCopy(contactInfo.whatsapp)}
                />
                
                {/* Twitter */}
                <ConnectionCard 
                  icon={<FaTwitter size={24} className="text-blue-400" />}
                  title="Twitter"
                  value={`@${contactInfo.twitter}`}
                  onClick={() => window.open(`https://twitter.com/${contactInfo.twitter}`, '_blank')}
                  onCopy={() => handleCopy(`https://twitter.com/${contactInfo.twitter}`)}
                />
                
                {/* GitHub */}
                <ConnectionCard 
                  icon={<FaGithub size={24} className="text-gray-700" />}
                  title="GitHub"
                  value={contactInfo.github}
                  onClick={() => window.open(`https://github.com/${contactInfo.github}`, '_blank')}
                  onCopy={() => handleCopy(`https://github.com/${contactInfo.github}`)}
                />
              </div>

              {/* Contact Form Option */}
              <div className="mt-8">
                <button 
                  onClick={() => alert('Contact form would open here')}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <FaDiscord size={18} />
                  <span>Send me a direct message</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 text-center text-gray-600 text-sm">
              <p>Let's create something amazing together!</p>
              <div className="mt-2 flex justify-center gap-4">
                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100"></span>
                <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-200"></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
  );
};

const ConnectionCard = ({ icon, title, value, onClick, onCopy }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl p-4 text-left  hover:shadow-md transition-all duration-300 border border-gray-200"
  >
    <div className="flex items-start gap-3">
      <div className="bg-gray-100 p-2 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{value}</p>
      </div>
    </div>
    
    <div className="flex gap-2 mt-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="flex-1 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Open
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCopy}
        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <FaCopy className="text-gray-600" size={14} />
      </motion.button>
    </div>
  </motion.div>
);

export default ConnectModal;