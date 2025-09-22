import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import assets from "../assets";
import { useProfile } from "../context/profilecontext";

const projects = [
  {
    title: "GS Store",
    description: "Full-featured online store with product catalog, cart, and checkout",
    tags: ["React", "Tailwind", "Node js", "Neon"],
    image: assets.GSSTORE,
    liveLink: "https://gsstorefrontend.netlify.app/",
    codeLink: "https://buymeacoffee.com/sharanclouk/e/417497",
    accentColor: "bg-purple-500"
  },
   {
    title: "Food Booker",
    description: "Internal food ordering system for workplaces",
    tags: ["React", "Node.js", "MongoDB"],
    image: assets.FoodBooker,
    liveLink: "https://foodbooker.netlify.app/",
    codeLink: "https://buymeacoffee.com/sharanclouk/e/417901",
    accentColor: "bg-rose-500"
  },
    {
    title: "Insight Hub",
    description: "Appraisal forum for workers",
    tags: ["React, Java, Neon"],
    image: assets.Personality,
    liveLink: "https://insighthubteja.netlify.app/",
    codeLink: "https://github.com/Hirthuk/employers-forum",
    accentColor: "bg-indigo-500"
  },
  {
    title: "Sneaker Hub",
    description: "E-commerce platform for premium footwear with modern UI",
    tags: ["React", "Tailwind"],
    image: assets.Blog,
    liveLink: "https://walklikepro.netlify.app/",
    codeLink: "https://github.com/Hirthuk/TailwindProject",
    accentColor: "bg-amber-500"
  },
  {
    title: "Health Dashboard",
    description: "Interactive dashboard for health metrics visualization",
    tags: ["JavaScript", "Chart.js", "API Integration"],
    image: assets.HealthDashboard,
    liveLink: "https://hirthuk.github.io/Health_Dashboard/#",
    codeLink: "https://github.com/Hirthuk/Health_Dashboard",
    accentColor: "bg-emerald-500"
  },
 
  {
    title: "Task Manager",
    description: "Productivity app with drag & drop functionality",
    tags: ["React", "Local Storage", "Tailwind"],
    image: assets.todo,
    liveLink: "https://simplereactfrontendtodo.netlify.app/",
    codeLink: "https://github.com/Hirthuk/React",
    accentColor: "bg-blue-500"
  },

];

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Projects = () => {
  const handleProjectClick = (liveLink, codeLink) => {
    if (liveLink && liveLink !== "#") {
      window.open(liveLink, "_blank");
    } else if (codeLink) {
      window.open(codeLink, "_blank");
    }
  };

  const { darkMode } = useProfile();

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 bg-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute top-3/4 right-20 w-96 h-96 rounded-full bg-blue-500 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Creations
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? "text-white" : "text-gray-200"} max-w-2xl mx-auto`}>
            Each project is a unique journey of problem-solving and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt key={index} options={defaultOptions} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-full flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group
                  ${darkMode ? "border border-gray-700 bg-gray-800 text-gray-100 hover:shadow-2xl" : "border border-gray-200 bg-white text-gray-900 hover:shadow-xl"}`}
                onClick={() => handleProjectClick(project.liveLink, project.codeLink)}
              >
                {/* Project Image with Glow Effect */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 ${project.accentColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Project+Preview";
                    }}
                  />

                  {/* Floating buttons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-medium shadow-lg hover:bg-gray-100 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium shadow-lg hover:bg-gray-800 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> View Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 flex-grow flex flex-col ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-900"} transition-colors`}>
                      {project.title}
                    </h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 ${project.accentColor} bg-opacity-10 rounded-full text-xs font-medium ${darkMode ? "text-gray-100" : "text-gray-800"} transition-all duration-300`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Accent bar */}
                <div className={`h-1 ${project.accentColor} w-full`}></div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Hirthuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-medium rounded-full hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 group"
          >
            View All Projects
            <FiGithub className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;