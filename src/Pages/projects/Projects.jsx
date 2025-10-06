import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack MERN e-commerce application with authentication, cart, and payment integration.",
    image: "https://i.ibb.co/PvH5QQjm/download-6.jpg",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, showcasing animations, skills, and projects.",
    image: "https://i.ibb.co/TDgxHxbV/download.jpg",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Travel Blog",
    description: "Responsive travel blog platform with dynamic posts and modern UI design.",
    image: "https://i.ibb.co/fGkbHTKx/download-4.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
];

// Simple Tilt Card Component
const TiltCard = ({ project }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 600 }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-700 hover:border-cyan-400 hover:shadow-lg cursor-pointer transition-all"
    >
      <motion.div
        style={{
          rotateX: rotate.y,
          rotateY: rotate.x,
          transition: "transform 0.1s ease-out",
        }}
        className=""
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-cyan-400 font-bold text-lg mt-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-cyan-700 rounded text-white">{t}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <a href={project.github} className="text-gray-300 hover:text-cyan-400 flex items-center gap-1">
            <Github size={16} /> Code
          </a>
          <a href={project.live} className="text-gray-300 hover:text-cyan-400 flex items-center gap-1">
            <ExternalLink size={16} /> Live
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="bg-slate-900 text-white py-20 px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Some of my recent works showcasing skills in web development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <TiltCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
