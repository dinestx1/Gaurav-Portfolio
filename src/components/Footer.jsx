import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-black to-gray-900 text-white pt-12"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gourav Aggarwal
            </h3>
            <p className="text-gray-300 text-sm">
              Creating innovative solutions for tomorrow's challenges
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Gallery'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaGithub />, name: 'GitHub' },
                { icon: <FaLinkedin />, name: 'LinkedIn' },
                { icon: <FaTwitter />, name: 'Twitter' },
                { icon: <FaEnvelope />, name: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>© {new Date().getFullYear()} TRIMAL. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;