import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Code, Server } from "lucide-react";
import EcommerceImg from "../../assets/portfolio.png";
import { useTheme } from "../../context/themeContext";

const ProjectCard = ({ image, title, description, technologies, links }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
        theme === "dark"
          ? "bg-slate-900/80 shadow-slate-400/40"
          : "bg-white shadow-gray-300"
      }`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Frontend Tech */}
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.frontend.map((tech, index) => (
            <span
              key={`f-${index}`}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                theme === "dark"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Backend Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.backend.map((tech, index) => (
            <span
              key={`b-${index}`}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                theme === "dark"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <h3
          className={`text-xl font-semibold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {links.live && (
            <Link
              to={links.live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border hover:bg-gray-100 transition"
            >
              <Eye size={16} /> Live
            </Link>
          )}

          {links.code && (
            <Link
              to={links.code}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border hover:bg-gray-100 transition"
            >
              <Code size={16} /> Code
            </Link>
          )}

          {links.server && (
            <Link
              to={links.server}
              target="_blank"
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm rounded-full border hover:bg-gray-100 transition"
            >
              <Server size={16} /> Server
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: "https://i.ibb.co/fGkbHTKx/download-4.jpg",
      title: "Blogs Website",
      description:
        "Developed a modern blog platform with CRUD and authentication features.",
      technologies: {
        frontend: ["React", "Redux", "Tailwind"],
        backend: ["Node", "Express", "MongoDB"],
      },
      links: {
        live: "https://infodrift-blogs.netlify.app/",
        code: "https://github.com/bharatroy4D/blogs-website",
        server: "https://github.com/yourusername/blogs-backend",
      },
    },
    {
      image: "https://i.ibb.co/TDgxHxbV/download.jpg",
      title: "Travel Tourism",
      description:
        "Built a dynamic travel booking app with secure user dashboard.",
      technologies: {
        frontend: ["React", "Context API", "Tailwind"],
        backend: ["Node", "Express", "MongoDB"],
      },
      links: {
        live: "https://travel-flyexplore.netlify.app/",
        code: "https://github.com/bharatroy4D/world-tour",
        server: "https://github.com/bharatroy4D/travel-backend",
      },
    },
    {
      image: EcommerceImg,
      title: "Organic Food",
      description:
        "E-commerce project with shopping cart, filter, and checkout system.",
      technologies: {
        frontend: ["React", "Redux Toolkit", "Tailwind"],
        backend: ["Node", "Express", "MongoDB"],
      },
      links: {
        live: "https://shopzen-ruddy.vercel.app/",
        code: "https://github.com/bharatroy4D/Sopzen",
        server: "https://github.com/bharatroy4D/organic-backend",
      },
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 ${
        theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
