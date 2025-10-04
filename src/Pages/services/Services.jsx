import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Smartphone, Palette, Database, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Web Development",
    description: "Modern, responsive, and scalable websites using MERN stack and latest technologies.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-purple-400" />,
    title: "Frontend Development",
    description: "Interactive UI with React, Tailwind CSS, and Framer Motion animations.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    title: "Responsive Design",
    description: "Pixel-perfect responsive websites optimized for mobile, tablet, and desktop.",
  },
  {
    icon: <Database className="w-10 h-10 text-yellow-400" />,
    title: "Backend Development",
    description: "Scalable REST APIs with Node.js, Express.js, and MongoDB.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-400" />,
    title: "Authentication & Security",
    description: "Secure login systems with JWT authentication and data protection.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "UI/UX Design",
    description: "Clean, modern, and user-friendly design for better user experience.",
  },
];

const Services = () => {
  return (
    <div className="bg-slate-900 text-white py-20 px-6 lg:px-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          My Services
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          I provide professional web development services to help businesses and individuals 
          build modern, responsive, and high-performing digital products.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-slate-800 rounded-2xl border border-slate-700 
                       hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 
                       transition-all"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-400">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-cyan-400">
          Ready to work together?
        </h2>
        <p className="text-gray-400 mt-2">
          Let’s build something amazing! Contact me for your next project.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 
                     rounded-full text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Get In Touch
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
