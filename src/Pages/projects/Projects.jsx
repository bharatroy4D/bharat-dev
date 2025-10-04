import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack MERN e-commerce application with authentication, cart, and payment integration.",
    image: "https://source.unsplash.com/600x400/?ecommerce,website",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, showcasing animations, skills, and projects.",
    image: "https://source.unsplash.com/600x400/?portfolio,website",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Travel Blog",
    description: "Responsive travel blog platform with dynamic posts and modern UI design.",
    image: "https://source.unsplash.com/600x400/?travel,website",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-900 text-white py-20 px-6 lg:px-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          A collection of my recent works that showcase my skills in web development, design, and modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(34,211,238,0.5)] transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-slate-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mt-5">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                >
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-cyan-400">
          Have a project idea?
        </h2>
        <p className="text-gray-400 mt-2">
          Let’s collaborate and bring your ideas to life with modern web solutions.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 
                     rounded-full text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
