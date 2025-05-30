"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiZoomIn, FiDownload, FiShare2, FiCalendar, FiMapPin } from 'react-icons/fi';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery data organized by events
  const galleryEvents = [
    {
      id: 1,
      title: "International Tech Conference",
      date: "June 15, 2023",
      location: "New Delhi, India",
      description: "Presented groundbreaking research on AI applications in emerging markets to an audience of industry leaders and academics.",
      images: [
        { 
          id: "event1-1",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", 
          alt: "Keynote presentation", 
          title: "Keynote Presentation",
          category: "Conference"
        },
        { 
          id: "event1-2",
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
          alt: "Panel discussion", 
          title: "Panel Discussion",
          category: "Roundtable"
        },
        { 
          id: "event1-3",
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", 
          alt: "Networking session", 
          title: "Networking Session",
          category: "Interaction"
        }
      ]
    },
    {
      id: 2,
      title: "Industry Innovation Summit",
      date: "August 22, 2023",
      location: "Bangalore, India",
      description: "Led a workshop on sustainable technology solutions for enterprise applications with participants from leading tech companies.",
      images: [
        { 
          id: "event2-1",
          src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", 
          alt: "Workshop session", 
          title: "Workshop Session",
          category: "Hands-on"
        },
        { 
          id: "event2-2",
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", 
          alt: "Award ceremony", 
          title: "Innovation Award",
          category: "Recognition"
        },
        { 
          id: "event2-3",
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", 
          alt: "Group photo", 
          title: "Group Photo",
          category: "Team"
        }
      ]
    },
    {
      id: 3,
      title: "University Collaboration Launch",
      date: "October 10, 2023",
      location: "IIT Delhi Campus",
      description: "Initiated joint research project with Tech University focused on entrepreneurial ecosystem development.",
      images: [
        { 
          id: "event3-1",
          src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521", 
          alt: "Signing ceremony", 
          title: "MOU Signing",
          category: "Partnership"
        },
        { 
          id: "event3-2",
          src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94", 
          alt: "Campus tour", 
          title: "Campus Tour",
          category: "Academic"
        },
        { 
          id: "event3-3",
          src: "https://images.unsplash.com/photo-1543269865-cbf427effbad", 
          alt: "Student interaction", 
          title: "Student Interaction",
          category: "Education"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Events Gallery</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Capturing milestones and professional achievements through curated visual storytelling
          </p>
        </motion.div>

        <div className="space-y-20">
          {galleryEvents.map((event) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="event-section"
            >
              <div className="mb-8 border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-6 mt-2">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 mt-3">{event.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.images.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedImage({...image, event})}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">{image.category}</span>
                          <h3 className="text-lg font-semibold mt-2">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            
            <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiCalendar className="mr-1" />
                    {selectedImage.event.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Event:</span> {selectedImage.event.title}
                </p>
                
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span> {selectedImage.event.location}
                </p>
                
                <div className="mt-6 flex gap-3">
                  <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <FiDownload className="w-5 h-5" />
                    Download
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 ml-4">
                    <FiShare2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;