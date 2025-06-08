import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiLinkedin, FiAward } from "react-icons/fi";
import assets from "../assets";
import { useProfile } from "../context/profilecontext";

const About = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const { darkMode } = useProfile();
  const [stats] = useState({
    commits: 1200,
    contributions: 20,
    leetcodeSolved: 25
  });

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer - Associate",
      image_url: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      issued_at: "2023-11-15",
      issuer_name: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/eda27a78-d91e-40a4-8df8-57cc2d1a0a5a"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect - Associate",
      image_url: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      issued_at: "2023-09-20",
      issuer_name: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/37ebb843-90d7-43c1-b065-cfefd76b34eb"
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      image_url: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      issued_at: "2023-06-10",
      issuer_name: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/78ad8571-c7cd-49e0-90df-66e504d4eb58"
    },
    {
      id: 4,
      title: "AWS Technical Accreditation",
      image_url: assets.aws_accredit,
      issued_at: "2023-05-01",
      issuer_name: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/7aca95f5-7476-4de2-bea8-492aab04dc6c"
    },
    {
      id: 5,
      title: "SnowPro Core Certification",
      image_url: assets.snowflake,
      issued_at: "2023-04-15",
      issuer_name: "Snowflake",
      url: "https://www.credly.com/earner/earned/badge/280c4d2c-a8e1-4fa2-8464-1e0c63fe47af"
    }
  ];

  return (
    <section
      id="about"
      className={`min-h-screen py-20 px-4 md:px-16 ${!darkMode ? "bg-white" : "bg-black"} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer | Cloud Specialist | Problem Solver
          </p>
        </motion.div>

        {/* Profile Dashboard - Now at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image and Basic Info */}
              <div className="flex flex-col items-center md:w-1/3">
                <div className="relative mb-6">
                  <img
                    src={assets.profile}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-purple-500/20 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white p-2 rounded-full">
                    <FiAward className="text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-1">Sharankumar P</h3>
                <p className="text-purple-500 font-medium mb-4">Full Stack Developer</p>
                <div className="text-center mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <p>Bengaluru/Chennai/Hyderabad</p>
                  <p>sharankumarp02@gmail.com</p>
                  <p>+91 6385642886</p>
                </div>
                <div className="flex gap-4 mb-6">
                  <a href="https://www.linkedin.com/in/sharankumar-p-g3/" target="_blank" rel="noopener" className="p-2 bg-gray-100 dark:bg-[#252538] rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a href="https://github.com/Hirthuk" target="_blank" rel="noopener" className="p-2 bg-gray-100 dark:bg-[#252538] rounded-full hover:bg-gray-800 hover:text-white transition-colors">
                    <FiGithub className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="md:w-2/3 w-full space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Cloud Development</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-[#252538] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Full Stack</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-[#252538] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Problem Solving</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-[#252538] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/50 dark:bg-[#181824]/50 rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'certifications' ? 'bg-purple-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252538]'}`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'activity' ? 'bg-purple-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252538]'}`}
            >
              Activity
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'skills' ? 'bg-purple-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252538]'}`}
            >
              Skills
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="space-y-8">
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FiAward className="text-purple-500" />
                  <span>My Certifications</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-purple-400/10 to-purple-600/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-4 border border-gray-200 dark:border-[#252538] hover:border-purple-300 dark:hover:border-purple-500 transition-all"
                    >
                      <div className="flex gap-4">
                        <img
                          src={cert.image_url}
                          alt={cert.title}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-lg hover:text-purple-500 transition-colors"
                          >
                            {cert.title}
                          </a>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer_name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Issued: {new Date(cert.issued_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-purple-500/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="text-sm text-purple-500 font-medium">Aug 2021 – Jan 2025</div>
                    <h4 className="text-lg font-bold mt-1">Bachelor of Computer Application</h4>
                    <p className="text-gray-600 dark:text-gray-300">SASTRA Deemed University</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      CGPA: 8.5/10 | Coursework: Object Oriented Programming, Data Structures and Algorithms, 
                      Operating Systems, Computer Networks, Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'activity' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Development Activity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-400/10 to-purple-600/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold">GitHub</h4>
                      <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full">
                        {stats.contributions} contributions
                      </span>
                    </div>
                    <img
                      src={`https://ghchart.rshah.org/Hirthuk`}
                      alt="GitHub Activity Graph"
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                    <a
                      href="https://github.com/Hirthuk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-purple-500 hover:underline"
                    >
                      View profile
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold">LeetCode</h4>
                      <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full">
                        {stats.leetcodeSolved} solved
                      </span>
                    </div>
                    <img
                      src={`https://leetcard.jacoblin.cool/SharanTheDeveloper?theme=dark&font=Baloo+Bhai+2`}
                      alt="LeetCode Activity Graph"
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                    <a
                      href="https://leetcode.com/SharanTheDeveloper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-yellow-500 hover:underline"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Development Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-purple-400/10 to-purple-600/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-purple-500">{stats.commits}+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Commits</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-500">{stats.contributions}+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Contributions</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 dark:from-[#252538] dark:to-[#181824] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-500">{stats.leetcodeSolved}+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Problems Solved</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Java', 'JavaScript', 'SQL', 'Node.js', 'React'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Node js', 'AWS', 'Devops', 'Jira', 'Java', 'Spring Boot', 'MongoDB',].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#181824] rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-purple-500/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="text-sm text-purple-500 font-medium">Aug 2021 - Present</div>
                    <h4 className="text-lg font-bold mt-1">Software Engineer</h4>
                    <p className="text-gray-600 dark:text-gray-300">HCL Technologies, Chennai</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-sm mt-2 space-y-1">
                      <li>Developed robust applications and managed in-house applications</li>
                      <li>Managed migrations including on-premise to AWS, Jenkins to CloudBees, and ALM to X-ray</li>
                      <li>Configured and maintained CI/CD pipelines for deployment activities</li>
                      <li>Managed cloud infrastructure including EC2, RDS, Lambda, and EKS</li>
                    </ul>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-500/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="text-sm text-purple-500 font-medium">Jun 2021 - Aug 2021</div>
                    <h4 className="text-lg font-bold mt-1">Software Engineer Intern</h4>
                    <p className="text-gray-600 dark:text-gray-300">HCL Technologies, Chennai</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-sm mt-2 space-y-1">
                      <li>Developed console-based bookstore project using Java JDK and PL/SQL</li>
                      <li>Implemented database design, querying, and stored procedures</li>
                      <li>Gained expertise in Core Java and Linux basics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;