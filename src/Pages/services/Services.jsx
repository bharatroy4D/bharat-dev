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
import { useTheme } from "../../context/ThemeContext"; // 🌙 Theme Context import

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
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <div
      id="services"
      className={`rounded-2xl border shadow-lg transition-all duration-500 py-16 px-6 lg:px-16 my-7 ${
        theme === "dark"
          ? "bg-slate-800/80 border-yellow-500 hover:shadow-yellow-400/30 text-white"
          : "bg-gray-100/70 border-blue-400 hover:shadow-blue-400/30 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-4">
          <span
            className={`w-16 h-0.5 transition-colors duration-300 ${
              theme === "dark" ? "bg-pink-500" : "bg-blue-500"
            }`}
          ></span>
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              theme === "dark" ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            My Services
          </h1>
          <span
            className={`w-16 h-0.5 transition-colors duration-300 ${
              theme === "dark" ? "bg-pink-500" : "bg-blue-500"
            }`}
          ></span>
        </h2>
        <p
          className={`mt-4 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
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
              className={`p-8 rounded-2xl border transition-all duration-200 ${
                theme === "dark"
                  ? "bg-slate-700 border-cyan-800 hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(34,211,238,0.5)] text-white"
                  : "bg-white border-gray-300 hover:border-blue-400 hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.4)] text-gray-900"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm mt-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-6 lg:mt-14">
        <h2
          className={`text-lg font-semibold transition-colors duration-300 ${
            theme === "dark" ? "text-cyan-400" : "text-blue-600"
          }`}
        >
          Ready to work together?
        </h2>
        <p
          className={`text-sm mt-2 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Let’s build something amazing! Contact me for your next project.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className={`inline-block mt-6 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-700 to-purple-500 text-white hover:shadow-cyan-500/30"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-400/30"
          }`}
        >
          Get In Touch
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
