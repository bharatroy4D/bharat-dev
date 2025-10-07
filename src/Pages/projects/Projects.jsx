import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Eye, Code, Server } from 'lucide-react';

const ProjectCard = ({ image, title, description, technologies, links }) => {
  return (
    <div
      className="bg-slate-800/80 rounded-2xl overflow-hidden shadow-xl 
                 transform transition-all duration-500 hover:scale-110 hover:shadow-orange-400/40"
    >
      {/* Project Image */}
      <div className="relative h-72 overflow-hidden bg-white p-4">
        <div
          className="w-full h-full bg-gray-100 rounded-lg transform rotate-3 
                     hover:rotate-0 transition-transform duration-500"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-110"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Technology Badges */}
        <div className="flex gap-2 mb-4">
          {technologies.frontend.map((tech, index) => (
            <span
              key={`frontend-${index}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          {technologies.backend.map((tech, index) => (
            <span
              key={`backend-${index}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm mb-1">{description}</p>

     
{/* Action Buttons */}
<div className="flex justify-center gap-3 mt-6 flex-wrap">
  <Link
    to={links.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-gray-600 
               text-white rounded-full hover:bg-slate-700 transition-colors text-sm font-medium"
  >
    <Eye className="w-4 h-4" /> Live
  </Link>

  <Link
    to={links.code}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-gray-600 
               text-white rounded-full hover:bg-slate-700 transition-colors text-sm font-medium"
  >
    <Code className="w-4 h-4" /> Code
  </Link>

  <Link
    to={links.server}
    target="_blank"
    rel="noopener noreferrer"
    className="hidden lg:flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-gray-600 
               text-white rounded-full hover:bg-slate-700 transition-colors text-sm font-medium"
  >
    <Server className="w-4 h-4" /> Server
  </Link>
</div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: 'https://i.ibb.co/fGkbHTKx/download-4.jpg',
      title: 'Blogs Website',
      description: 'Developed REST API backend with Express and MongoDB',
      technologies: {
        frontend: ['React', 'Node', 'Express'],
        backend: ['Firebase', 'MongoDB', 'Tailwind'],
      },
      links: { live: '#', code: '#', server: '#' },
    },
    {
      image: 'https://i.ibb.co/TDgxHxbV/download.jpg',
      title: 'Travel Tourism',
      description: 'Developed REST API backend with Express and MongoDB',
      technologies: {
        frontend: ['React', 'Node', 'Express'],
        backend: ['Firebase', 'MongoDB', 'Tailwind'],
      },
      links: { live: '#', code: '#', server: '#' },
    },
    {
      image: 'https://i.ibb.co/PvH5QQjm/download-6.jpg',
      title: 'Organic Food',
      description: 'Developed REST API backend with Express and MongoDB',
      technologies: {
        frontend: ['React', 'Node', 'Express'],
        backend: ['Firebase', 'MongoDB', 'Tailwind'],
      },
      links: { live: '#', code: '#', server: '#' },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800/80 to-slate-700 rounded-2xl border border-orange-500 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            <span className="w-16 h-0.5 bg-pink-500"></span>
            My Projects
            <span className="w-16 h-0.5 bg-pink-500"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-pink-500 w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
