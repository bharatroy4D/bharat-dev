import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUserAlt,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // 🌙 Import Theme Context

const About = () => {
  const { theme } = useTheme(); // ✅ Access current theme (dark/light)

  return (
    <section
      id="about"
      className={`min-h-screen rounded-2xl border shadow-lg transition-all duration-500 py-16 md:py-24 px-6 flex flex-col justify-center items-center ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-yellow-500 hover:shadow-yellow-400/30 text-white"
          : "bg-gradient-to-b from-gray-100 to-gray-200 border-blue-400 hover:shadow-blue-400/30 text-gray-900"
      }`}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
          theme === "dark" ? "text-yellow-400" : "text-blue-600"
        }`}
      >
        About Me
      </motion.h2>

      {/* Sub Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className={`text-center max-w-3xl leading-relaxed mb-12 ${
          theme === "dark" ? "text-gray-400" : "text-gray-700"
        }`}
      >
        I’m{" "}
        <span
          className={`font-semibold ${
            theme === "dark" ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Bharat Roy
        </span>
        , a creative{" "}
        <span
          className={`font-semibold ${
            theme === "dark" ? "text-blue-400" : "text-purple-600"
          }`}
        >
          Frontend Developer
        </span>{" "}
        who loves transforming ideas into interactive digital experiences. I
        focus on writing clean, efficient, and maintainable code while
        delivering user-friendly interfaces.
      </motion.p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        <InfoCard
          theme={theme}
          icon={<FaUserAlt className="text-4xl mx-auto mb-4 text-yellow-400" />}
          title="Who I Am"
          text="A curious and self-motivated developer, always eager to learn and improve my skills."
        />
        <InfoCard
          theme={theme}
          icon={<FaLaptopCode className="text-4xl mx-auto mb-4 text-blue-400" />}
          title="What I Do"
          text="I build responsive, modern web applications using React, Tailwind CSS, and Framer Motion."
        />
        <InfoCard
          theme={theme}
          icon={<FaLightbulb className="text-4xl mx-auto mb-4 text-pink-400" />}
          title="My Vision"
          text="To create digital experiences that are both visually appealing and highly functional."
        />
        <InfoCard
          theme={theme}
          icon={<FaRocket className="text-4xl mx-auto mb-4 text-green-400" />}
          title="My Approach"
          text="I combine creativity with technology to deliver seamless, interactive, and engaging web experiences."
        />
      </div>

      {/* Bottom Paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`max-w-4xl mt-16 text-center leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-700"
        }`}
      >
        <p>
          I believe in building websites that not only function perfectly but
          also provide a delightful user experience. By leveraging the latest
          frontend technologies and animation techniques, I strive to create
          interfaces that are intuitive, responsive, and visually engaging.
        </p>
      </motion.div>
    </section>
  );
};

// 🟢 Reusable Info Card Component
const InfoCard = ({ icon, title, text, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className={`rounded-2xl p-6 text-center transition-all duration-300 border ${
      theme === "dark"
        ? "bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 hover:shadow-yellow-400/20"
        : "bg-white border-gray-300 hover:border-blue-400/50 hover:shadow-blue-300/20"
    }`}
  >
    {icon}
    <h3
      className={`text-xl font-semibold mb-2 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm leading-relaxed ${
        theme === "dark" ? "text-gray-400" : "text-gray-700"
      }`}
    >
      {text}
    </p>
  </motion.div>
);

export default About;
