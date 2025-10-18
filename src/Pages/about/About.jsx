import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUserAlt,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl border border-orange-500 shadow-lg hover:shadow-orange-400/30 text-white py-16 md:py-24 px-6 flex flex-col justify-center items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center"
      >
        About Me
      </motion.h2>

      {/* Sub Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 text-center max-w-3xl leading-relaxed mb-12"
      >
        I’m <span className="text-yellow-400 font-semibold">Bharat Roy</span>, a creative
        <span className="text-blue-400 font-semibold"> Frontend Developer</span> who loves
        transforming ideas into interactive digital experiences. I focus on writing clean,
        efficient, and maintainable code while delivering user-friendly interfaces.
      </motion.p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        <InfoCard
          icon={<FaUserAlt className="text-yellow-400 text-4xl mx-auto mb-4" />}
          title="Who I Am"
          text="A curious and self-motivated developer, always eager to learn and improve my skills."
        />
        <InfoCard
          icon={<FaLaptopCode className="text-blue-400 text-4xl mx-auto mb-4" />}
          title="What I Do"
          text="I build responsive, modern web applications using React, Tailwind CSS, and Framer Motion."
        />
        <InfoCard
          icon={<FaLightbulb className="text-pink-400 text-4xl mx-auto mb-4" />}
          title="My Vision"
          text="To create digital experiences that are both visually appealing and highly functional."
        />
        <InfoCard
          icon={<FaRocket className="text-green-400 text-4xl mx-auto mb-4" />}
          title="My Approach"
          text="I combine creativity with technology to deliver seamless, interactive, and engaging web experiences."
        />
      </div>

      {/* Bottom Paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl text-gray-400 mt-16 text-center leading-relaxed"
      >
        <p>
          I believe in building websites that not only function perfectly but also provide a delightful
          user experience. By leveraging the latest frontend technologies and animation techniques, I
          strive to create interfaces that are intuitive, responsive, and visually engaging.
        </p>
      </motion.div>
    </section>
  );
};

// Reusable Info Card Component
const InfoCard = ({ icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300"
  >
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

export default About;
