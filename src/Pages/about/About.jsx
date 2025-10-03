import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  // Container animation for stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript"];

  const experiences = [
    { year: "2023", title: "Frontend Developer", company: "XYZ Company" },
    { year: "2024", title: "MERN Stack Developer", company: "ABC Solutions" },
    { year: "2025", title: "Freelance Web Developer", company: "Self-Employed" },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16 px-8 relative overflow-hidden rounded-2xl border border-orange-500">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-64 h-64 bg-blue-700 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          About Me
        </motion.h1>

        <motion.p variants={item} className="text-gray-300 leading-relaxed mb-8">
          I'm <span className="text-yellow-400">Bharat Roy</span>, a passionate <span className="text-cyan-400">MERN Stack Developer</span> dedicated to building modern, responsive, and efficient web applications.
          <br />
          <Typewriter
            words={["Creating Interactive UIs", "Building Scalable Backends", "Delivering Quality Code"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Skills Section */}
        <motion.div variants={item} className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-gray-800 rounded-full border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="p-4 bg-gray-800 rounded-lg border border-cyan-400 flex justify-between items-center hover:bg-cyan-500 hover:text-slate-900 transition-all"
                variants={item}
              >
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <span className="text-yellow-400 font-bold">{exp.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
