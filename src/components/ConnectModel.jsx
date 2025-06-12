// components/layout/ConnectModal.jsx
'use client';
import React, { useState, useEffect } from 'react';
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
  FaCopy,
  FaCheck
} from 'react-icons/fa';

const ConnectModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(null);
  const contactInfo = {
    email: 'contact@example.com',
    phone: '+1 (234) 567-8900',
    whatsapp: '+12345678900',
    linkedin: 'your-linkedin',
    twitter: 'your-twitter',
    github: 'your-github'
  };

  // Show copied indicator and reset after 1.5s
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setCopied(null); // Reset copied state when closing
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left">
                <div className="bg-white/10 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
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
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Connection Options */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* LinkedIn */}
                <ConnectionCard 
                  icon={<FaLinkedinIn className="text-blue-700" />}
                  title="LinkedIn"
                  value={contactInfo.linkedin}
                  copied={copied === 'linkedin'}
                  onClick={() => window.open(`https://linkedin.com/in/${contactInfo.linkedin}`, '_blank')}
                  onCopy={() => handleCopy(`https://linkedin.com/in/${contactInfo.linkedin}`, 'linkedin')}
                />
                
                {/* Email */}
                <ConnectionCard 
                  icon={<FaEnvelope className="text-red-500" />}
                  title="Email"
                  value={contactInfo.email}
                  copied={copied === 'email'}
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  onCopy={() => handleCopy(contactInfo.email, 'email')}
                />
                
          
                
                {/* WhatsApp */}
                <ConnectionCard 
                  icon={<FaWhatsapp className="text-green-500" />}
                  title="WhatsApp"
                  value={contactInfo.whatsapp}
                  copied={copied === 'whatsapp'}
                  onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
                  onCopy={() => handleCopy(contactInfo.whatsapp, 'whatsapp')}
                />
                
                {/* Twitter */}
                <ConnectionCard 
                  icon={<FaTwitter className="text-blue-400" />}
                  title="Twitter"
                  value={`@${contactInfo.twitter}`}
                  copied={copied === 'twitter'}
                  onClick={() => window.open(`https://twitter.com/${contactInfo.twitter}`, '_blank')}
                  onCopy={() => handleCopy(`https://twitter.com/${contactInfo.twitter}`, 'twitter')}
                />
                
          
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
    </AnimatePresence>
  );
};

const ConnectionCard = ({ icon, title, value, onClick, onCopy, copied }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl p-3 sm:p-4 text-left hover:shadow-md transition-all duration-300 border border-gray-200"
  >
    <div className="flex items-start gap-3">
      <div className="bg-gray-100 p-2 rounded-lg">
        {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-800 text-base sm:text-lg">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{value}</p>
      </div>
    </div>
    
    <div className="flex gap-2 mt-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="flex-1 py-2 text-xs sm:text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Open
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCopy}
        disabled={copied}
        className={`p-2 rounded-lg transition-colors ${copied ? 'bg-green-100' : 'bg-gray-100 hover:bg-gray-200'}`}
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
          <FaCheck className="text-green-600" size={14} />
        ) : (
          <FaCopy className="text-gray-600" size={14} />
        )}
      </motion.button>
    </div>
  </motion.div>
);

export default ConnectModal;