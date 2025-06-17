"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaHeart,FaEye,FaShare,FaArrowRight} from 'react-icons/fa';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    { id:1,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", 
      alt: "Project Image 1", 
      title: "Research Presentation",
      category: "Academic"
    },
    { id:2,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
      alt: "Project Image 2", 
      title: "Technical Workshop",
      category: "Professional"
    },
    { id:3,
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", 
      alt: "Project Image 3", 
      title: "Innovation Summit",
      category: "Events"
    },
  ];

  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Gallery
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Explore our latest projects and events through our visual showcase
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                      {image.category}
                    </span>
                  
                  </div>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
              
         
            </div>
            
        
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group">
          View Full Gallery
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  </section>
  );
};

export default GallerySection;