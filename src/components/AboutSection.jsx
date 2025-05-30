"use client";
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGlobe, FiBarChart2, FiCpu, FiUsers, FiBook, FiAward } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-20 relative z-10"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6">
            About me
          </h2>
          <p className="text-sm lg:text-lg text-gray-600  max-w-4xl mx-auto leading-relaxed">
            Seasoned professional and founder of The Growth Vibes, leveraging 7+ years of experience in startup mentorship, 
            academic research, and entrepreneurship development. Senior Research Fellow at IIT Delhi studying Indian 
            entrepreneurial ecosystems, with a Master's in Finance & Accounting from Shri Ram College of Commerce.
          </p>
        </motion.div>

        {/* Core Expertise Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28 relative z-10">
          {/* Academic & Research */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="space-y-8"
>
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-blue-100/50 rounded-xl">
      <FiBook className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
    </div>
    <h3 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
      Academic & Research Leadership
    </h3>
  </div>
  
  <div className="space-y-6">
    <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
      Currently pursuing PhD at IIT Delhi's Department of Management Studies, focusing on entrepreneurial ecosystems. 
      Authored multiple research papers and contributed to academic programs at premier institutions.
    </p>

    <div className="relative pl-8 border-l-2 border-blue-100 space-y-8">
      {/* Timeline Item 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative"
      >

        <div className="space-y-2">
          <h4 className="text-md lg:text-lg font-semibold text-gray-800">PhD Research</h4>
          <p className="text-sm text-gray-500">IIT Delhi • 2020-Present</p>
          <p className="text-gray-600 text-sm">
            Focused on entrepreneurial ecosystem development, published 5+ papers in peer-reviewed journals
          </p>
        </div>
      </motion.div>

      {/* Timeline Item 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative"
      >
     
        <div className="space-y-2">
          <h4 className="text-md lg:text-lg font-semibold text-gray-800">M.Com Excellence</h4>
          <p className="text-sm text-gray-500">Shri Ram College • 2016-2018</p>
          <p className="text-gray-600 text-sm">
            Ranked 28th nationally, developed financial analysis frameworks adopted in curriculum
          </p>
        </div>
      </motion.div>

      {/* Timeline Item 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative"
      >
      
        <div className="space-y-2">
          <h4 className="text-md lg:text-lg font-semibold text-gray-800">Research Contributions</h4>
          <p className="text-sm text-gray-500">Multiple Institutions • 2018-Present</p>
          <p className="text-gray-600 text-sm">
            Guest lectures at 10+ universities, curriculum development for national entrepreneurship programs
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>

          {/* Entrepreneurial Expertise */}
          <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white/80 backdrop-blur-sm  rounded-2xl"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-purple-100/50 rounded-xl">
        <FiAward className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
      </div>
      <h3 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Core Competencies
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[
        'Startup Development',
        'Entrepreneurship',
        'Program Leadership',
        'Research & Analysis',
        'Problem Solving',
        'Team Building',
        'Teaching & Mentoring'
      ].map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200"
        >
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-gray-700 font-medium text-xs md:text-base">{skill}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
        </div>

        {/* Venture Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10 mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-green-100/50 rounded-xl">
              <FiGlobe className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
            </div>
            <h3 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Key Initiatives
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The Growth Vibes",
                description: "Comprehensive startup launch platform offering end-to-end support from ideation to scaling",
                gradient: "from-blue-600 to-cyan-500",
                icon: <FiCpu />
              },
              {
                title: "ThinkStartup Academics",
                description: "Developing entrepreneurial curriculum for school students across India",
                gradient: "from-purple-600 to-fuchsia-500",
                icon: <FiUsers />
              },
            ].map((venture, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative h-full bg-white/90 backdrop-blur-sm p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${venture.gradient} w-fit mb-4`}>
                        {venture.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{venture.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{venture.description}</p>
                    </div>
                    <FiArrowUpRight className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <Link href="/about" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-shadow">
            View Full Professional Journey
          </Link>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0,_trans_70%)]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.1)_0,_trans_70%)]" />
      </div>
    </section>
  );
};

export default AboutSection;