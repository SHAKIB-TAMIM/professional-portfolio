
import { useState } from "react";
import { FolderGit2, Target } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Campus Loop",
      category: "fullstack",
      year: "2025",
      image: "campus-loop.png",
      description: "A resource sharing & marketplace platform with authentication, OTP verification, dashboard, and messaging system.",
      technologies: ["HTML", "Tailwind", "JavaScript", "Python-Django", "MySQL"],
      liveUrl: "https://shakibtamim.pythonanywhere.com/",
      githubUrl: "https://github.com/SHAKIB-TAMIM/Project_Campus_Loop"
    },
    {
      title: "Campus Social Network",
      category: "fullstack",
      year: "2026",
      image: "csn.png",
      description: "A student social platform with secure authentication, email verification, real-time chat, Follow, Share, Live Notifications, and Smart User Search functionalities.",
      technologies: ["HTML", "Tailwind", "Bootstrap", "JavaScript", "Django REST", "SQLite", "Alpine.js", "HTMX"],
      liveUrl: "https://csn.pythonanywhere.com/",
      githubUrl: "https://github.com/SHAKIB-TAMIM/Campus_Social_network"
    },
    {
      title: "Tamim's Photographic Gallery",
      category: "fullstack",
      year: "2026",
      image: "tpg.jpg",
      description: "Dynamic Gallery with interactive persistent liking system and Lightbox View functionalities.",
      technologies: ["React.js", "Axios", "CSS3", "Django REST", "SQLite", "JWT-Free Auth"],
      liveUrl: "https://tpg.pythonanywhere.com/",
      githubUrl: "https://github.com/SHAKIB-TAMIM/photography-website"
    },
    {
      title: "Adaptive CCTV Compression System",
      category: "capstone",
      year: "2026",
      image: "cctv.png",
      description: "Optimized video storage efficiency using compression techniques and bandwidth circulation, ensuring highest ROI. Adjusts compression based on scene dynamics and regions of interest.",
      technologies: ["React", "Node.js", "OpenCV", "FFmpeg", "Python", "RTSP", "UDP"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAKIB-TAMIM/CCTV_Compression"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "capstone", name: "Capstone" }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <FolderGit2 className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've built. Each one represents a unique challenge and learning experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">{project.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/30 rounded-full text-purple-700 dark:text-purple-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-white/10">
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center px-4 py-2 bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 rounded-lg font-medium hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
