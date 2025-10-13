import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Smartphone,
  Palette,
  Database,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites using MERN stack and latest technologies.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-purple-400" />,
    title: "Frontend Development",
    description:
      "Interactive UI with React, Tailwind CSS, and Framer Motion animations.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    title: "Responsive Design",
    description:
      "Pixel-perfect responsive websites optimized for mobile, tablet, and desktop.",
  },
  {
    icon: <Database className="w-10 h-10 text-yellow-400" />,
    title: "Backend Development",
    description:
      "Scalable REST APIs with Node.js, Express.js, and MongoDB.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-400" />,
    title: "Authentication & Security",
    description:
      "Secure login systems with JWT authentication and data protection.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "UI/UX Design",
    description:
      "Clean, modern, and user-friendly design for better user experience.",
  },
];

// 🔹 Fast Animation Variants
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  hiddenDown: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <div
      id="services"
      className="bg-slate-800/80 rounded-2xl border border-orange-500 shadow-lg hover:shadow-orange-400/30 text-white py-16 px-6 lg:px-16 my-7"
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-4">
          <span className="w-16 h-0.5 bg-pink-500"></span>
          My Services
          <span className="w-16 h-0.5 bg-pink-500"></span>
        </h2>
        <p className="text-gray-400 mt-4">
          I provide professional web development services to help businesses and
          individuals build modern, responsive, and high-performing digital
          products.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => {
          const direction =
            i % 3 === 0
              ? "hiddenLeft"
              : i % 3 === 1
              ? "hiddenDown"
              : "hiddenRight";

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial={direction}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 bg-slate-700 rounded-2xl border border-cyan-800 
                         hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(34,211,238,0.5)] 
                         transition-all duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-400">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-6 lg:mt-14">
        <h2 className="text-lg font-semibold text-cyan-400">
          Ready to work together?
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Let’s build something amazing! Contact me for your next project.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#services"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-700 to-purple-500 
                     rounded-full text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Get In Touch
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
