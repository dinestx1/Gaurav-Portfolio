// app/projects/[id]/page.js
"use client"
import { useState} from 'react';
import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiCalendar, FiUsers, FiMail, FiTarget, FiCheckCircle, FiGlobe, FiFileText, FiDollarSign } from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { formatTimeline } from '@/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getPaperByid } from '@/store/slices/authSlice';

const ProjectDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const {paper,loading,error}=useSelector((state)=>state.auth);
  
  const dispatch = useDispatch()
  const { id } = useParams();
  


  useEffect(() => {
    console.log(id)
    if (id) {
      dispatch(getPaperByid({id}))
    }
  }, [dispatch, id])
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Entrepreneurial Ecosystem Health Index",
  //     description: "Developing a comprehensive index to measure the health and vitality of regional entrepreneurial ecosystems using multi-criteria decision-making approaches. This project aims to provide policymakers with actionable insights to foster innovation and economic growth.",
  //     status: "active",
  //     collaboration: "open",
  //     partners: ["IIT Delhi Research Team", "Ministry of Commerce", "NASSCOM"],
  //     timeline: "Jan 2023 - Dec 2025",
  //     objectives: [
  //       "Create a standardized framework for ecosystem evaluation",
  //       "Identify key performance indicators for entrepreneurial success",
  //       "Develop predictive models for ecosystem growth trajectories",
  //       "Establish benchmark metrics for regional comparisons"
  //     ],
  //     requirements: [
  //       "Data scientists with expertise in MCDM approaches",
  //       "Regional economic development data",
  //       "Partnerships with local entrepreneurial support organizations",
  //       "Funding for research infrastructure"
  //     ],
  //     contact: "ecosystem.index@research.gov.in",
  //     progress: 65,
  //     funding: {
  //       secured: "₹85,00,000",
  //       needed: "₹1,20,00,000"
  //     },
  //     resources: [
  //       { name: "Research Proposal", url: "#" },
  //       { name: "Preliminary Findings", url: "#" },
  //       { name: "Methodology Framework", url: "#" }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Startup India Impact Assessment",
  //     description: "Evaluating the effectiveness of the Startup India program on entrepreneurial activity and economic development indicators across different states.",
  //     status: "active",
  //     collaboration: "closed",
  //     partners: ["NITI Aayog", "DIPP", "State Innovation Councils"],
  //     timeline: "Mar 2024 - Dec 2024",
  //     objectives: [
  //       "Quantify program impact on new venture creation",
  //       "Assess regional variations in implementation effectiveness",
  //       "Evaluate economic outcomes for participating startups",
  //       "Identify best practices for policy refinement"
  //     ],
  //     requirements: [
  //       "Access to Startup India program data",
  //       "Econometric analysis expertise",
  //       "State-level economic indicators",
  //       "Case studies from successful program participants"
  //     ],
  //     contact: "startup.impact@research.gov.in",
  //     progress: 45,
  //     funding: {
  //       secured: "₹60,00,000",
  //       needed: "₹95,00,000"
  //     },
  //     resources: [
  //       { name: "Research Proposal", url: "#" },
  //       { name: "Survey Instrument", url: "#" },
  //       { name: "Interim Report", url: "#" }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Student Entrepreneurship Portal",
  //     description: "Creating a digital platform connecting student entrepreneurs with mentors, investors, and resources across Indian universities.",
  //     status: "planning",
  //     collaboration: "open",
  //     partners: ["AICTE", "University Grants Commission", "IIT Incubation Centers"],
  //     timeline: "Q3 2024 - Q2 2025",
  //     objectives: [
  //       "Develop a centralized resource hub for student founders",
  //       "Facilitate mentor-student matching algorithm",
  //       "Create investor showcase opportunities",
  //       "Track student venture progress and outcomes"
  //     ],
  //     requirements: [
  //       "Full-stack developers (React/Node.js)",
  //       "University entrepreneurship program data",
  //       "UI/UX designers for intuitive interface",
  //       "Partnerships with incubation centers"
  //     ],
  //     contact: "student.portal@research.gov.in",
  //     progress: 25,
  //     funding: {
  //       secured: "₹25,00,000",
  //       needed: "₹75,00,000"
  //     },
  //     resources: [
  //       { name: "Project Charter", url: "#" },
  //       { name: "Technical Requirements", url: "#" },
  //       { name: "Partnership Proposal", url: "#" }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: "Digital Currency Adoption Framework",
  //     description: "Developing policy recommendations for CBDC implementation in emerging economies with focus on financial inclusion.",
  //     status: "completed",
  //     collaboration: "closed",
  //     partners: ["RBI Research Division", "Finance Ministry", "IMF"],
  //     timeline: "Jul 2022 - Nov 2023",
  //     objectives: [
  //       "Analyze global CBDC implementation case studies",
  //       "Identify barriers to adoption in rural communities",
  //       "Develop phased rollout strategy",
  //       "Create security protocols for digital transactions"
  //     ],
  //     requirements: [
  //       "Blockchain technology expertise",
  //       "Financial inclusion research data",
  //       "Cybersecurity specialists",
  //       "Regulatory compliance consultants"
  //     ],
  //     contact: "cbdc.research@rbi.org.in",
  //     progress: 100,
  //     funding: {
  //       secured: "₹1,10,00,000",
  //       needed: "₹1,10,00,000"
  //     },
  //     resources: [
  //       { name: "Final Report", url: "#" },
  //       { name: "Policy Recommendations", url: "#" },
  //       { name: "Implementation Roadmap", url: "#" }
  //     ]
  //   }
  // ];
  
 
  const project = paper;
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading paper: {error}</div>;
  if (!paper) return <div>Research paper not found.</div>;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        <div className="bg-white rounded-2xl border-1  overflow-hidden">
          {/* Project Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
            <div className="relative z-10 p-8">
              <div className="flex flex-wrap justify-between gap-4 mb-6">
                <div className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  project.publicationStatus === "published" 
                    ? "bg-green-100 text-green-800" 
                    : project.publicationStatus === "draft" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-gray-100 text-gray-800"
                }`}>
                  {project.publicationStatus === "published" 
                    ? "Published" 
                    : project.publicationStatus === "draft" 
                      ? "Draft" 
                      : "Completed Project"}
                </div>
                <div className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  project.openCollaboration === true 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {project.openCollaboration === true
                    ? "Open for Collaboration" 
                    : "Collaboration Closed"}
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2 text-indigo-100">
                  <FiCalendar className="w-5 h-5" />
                  <span>{formatTimeline(project.startDate, project.endDate, project.isOngoing)}</span>
                </div>
                
                <div className="flex items-center gap-2 text-indigo-100">
                  <FiUsers className="w-5 h-5" />
                  <span>{project.partners.length} Partners</span>
                </div>
                
                <div className="flex items-center gap-2 text-indigo-100">
                  <FiDollarSign className="w-5 h-5" />
                  <span>{project.funding.secured} secured</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Body */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FiFileText className="text-indigo-600" />
                    Project Overview
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {showFullDescription 
                      ? project.description 
                      : `${project.description.substring(0, 250)}...`
                    }
                  </p>
                  <button 
                    onClick={toggleDescription}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                </div>
                
                {/* Objectives */}
                <div className="mb-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FiTarget className="text-indigo-600" />
                    Project Objectives
                  </h2>
                  <ul className="space-y-3">
                    {project.objective.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Progress & Funding */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-3">Project Progress</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${
                          project.progress === 100 ? 'bg-green-500' : 'bg-indigo-600'
                        }`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 text-sm">{project.progress}% completed</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-3">Funding Status</h3>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Secured</span>
                      <span className="font-medium">{project.funding.secured}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Required</span>
                      <span className="font-medium">{project.funding.needed}</span>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            project.funding.secured === project.funding.needed 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                          }`} 
                          style={{ 
                            width: `${(parseInt(project.funding.secured.replace(/[^\d]/g, '')) / 
                                    parseInt(project.funding.needed.replace(/[^\d]/g, '')) * 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Resources */}
                <div className="mb-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FiGlobe className="text-indigo-600" />
                    Project Resources
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.resources.map((resource, idx) => (
                      <a 
                        key={idx} 
                        href={resource.url}
                        className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                      >
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <FiFileText className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="font-medium text-gray-800">{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                {/* Partners */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FiUsers className="text-indigo-600" />
                    Project Partners
                  </h2>
                  <ul className="space-y-3">
                    {project.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                        <span className="text-gray-700">{partner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Collaboration Section */}
                {project.openCollaboration === true && (
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Collaboration Opportunities</h2>
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-800 mb-3">We're looking for partners with:</h3>
                      <ul className="space-y-2">
                        {project.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <a 
                        href={`mailto:${project.contact}`} 
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition-colors font-medium"
                      >
                        <FiMail className="w-5 h-5" />
                        Contact Project Lead
                      </a>
                      {/* <button className="w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-800 px-5 py-3 border border-indigo-300 rounded-lg font-medium">
                        Submit Collaboration Proposal
                      </button> */}
                    </div>
                  </div>
                )}
                
                {/* Get Involved */}
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Get Involved</h2>
                  <p className="text-gray-600 mb-6">
                    Interested in contributing to this research project? Reach out to discuss collaboration opportunities.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${project.contact}`} 
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-colors font-medium"
                    >
                      <FiMail className="w-5 h-5" />
                      Email Project Team
                    </a>
                    <button className="w-full flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 px-5 py-3 border border-gray-300 rounded-lg font-medium">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;