"use client";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Entrepreneurial Ecosystem Health Index",
      description: "Developing a comprehensive index to measure the health and vitality of regional entrepreneurial ecosystems using multi-criteria decision-making approaches.",
      status: "active",
      collaboration: "open",
      partners: ["IIT Delhi Research Team", "Ministry of Commerce"],
      timeline: "2023-2025"
    },
    {
      id: 2,
      title: "Startup India Impact Assessment",
      description: "Evaluating the effectiveness of the Startup India program on entrepreneurial activity and economic development indicators across different states.",
      status: "active",
      collaboration: "closed",
      partners: ["NITI Aayog", "DIPP"],
      timeline: "2024"
    },
    {
      id: 3,
      title: "Student Entrepreneurship Portal",
      description: "Creating a digital platform connecting student entrepreneurs with mentors, investors, and resources across Indian universities.",
      status: "planning",
      collaboration: "open",
      partners: ["AICTE", "University Grants Commission"],
      timeline: "Q3 2024"
    },
    {
      id: 4,
      title: "Digital Currency Adoption Framework",
      description: "Developing policy recommendations for CBDC implementation in emerging economies with focus on financial inclusion.",
      status: "completed",
      collaboration: "closed",
      partners: ["RBI Research Division"],
      timeline: "2022-2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Research Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Current and completed initiatives exploring entrepreneurial ecosystems and innovation policy
          </p>
        </motion.div>

        <div className="grid   gap-8 mb-16">
    

          <div className="bg-white p-8 rounded-2xl  border border-gray-100">
           
            <p className="text-gray-600 mb-6">
              Projects seeking academic or industry partners
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl  border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Timeline</h2>
          <div className="relative h-2 bg-gray-200 rounded-full mb-12">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-1/4 w-1/4 h-full bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-2/4 w-1/4 h-full bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-3/4 w-1/4 h-full bg-gray-300 rounded-full"></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {["2022", "2023", "2024", "Future"].map((year, idx) => (
              <div key={idx} className="text-center">
                <div className="font-bold text-gray-800">{year}</div>
                <div className="text-sm text-gray-500 mt-2">
                  {idx === 0 ? "Completed" : idx === 3 ? "Planning" : "Active"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;