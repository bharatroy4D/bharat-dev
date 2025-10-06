import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

// React Icons Import
import { FaReact, FaNodeJs, FaDatabase, FaLock } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

const About = () => {
  const skills = [
    <FaReact className="text-cyan-400 text-4xl" />,
    <FaNodeJs className="text-green-500 text-4xl" />,
    <SiExpress className="text-gray-300 text-4xl" />,
    <SiMongodb className="text-green-600 text-4xl" />,
    <SiTailwindcss className="text-cyan-300 text-4xl" />,
    <SiRedux className="text-purple-500 text-4xl" />,
    <FaDatabase className="text-yellow-400 text-4xl" />,
    <FaLock className="text-red-400 text-4xl" />,
  ];

  const experiences = [
    { year: "2024", title: "Frontend Developer", company: "Online Platform" },
    { year: "2025", title: "MERN Stack Developer", company: "Offline Training" },
  ];

  return (
    <div className="bg-slate-800/80 text-white min-h-screen rounded-2xl border border-orange-500 py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-600/45 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/45 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="flex gap-3 items-center  text-xl lg:text-3xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            <img className="w-14 h-14 rounded-full border border-orange-500 bg-gray-400" src="https://i.ibb.co.com/svcKk0YT/download.png" alt="" />
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm <span className="text-yellow-400 font-semibold">Bharat Roy</span>, a passionate{" "}
            <span className="text-cyan-400  ">MERN Stack Developer</span > dedicated to building modern, responsive, and efficient web applications.
            <br />
            <span className="text-cyan-300 mt-2 block">
              <Typewriter
                words={[
                  "Creating Interactive UIs",
                  "Building Scalable Backends",
                  "Delivering Quality Code",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Skills</h2>

            {/* First Line (Left → Right) */}
            <Marquee pauseOnHover={true} gradient={false} speed={60}>
              <div className="flex gap-8">
                {skills.map((icon, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded border border-cyan-400 shadow-md hover:bg-cyan-400 hover:text-slate-900 transition-all"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </Marquee>

            {/* Second Line (Right → Left) */}
            <Marquee pauseOnHover={true} gradient={false} speed={60} direction="right">
              <div className="flex gap-8 mt-6">
                {skills.map((icon, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded  border border-purple-400 shadow-md hover:bg-purple-400 hover:text-slate-900 transition-all"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>

        {/* Right Side - Experience */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400 hover:bg-slate-700 transition-all shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className=" text-lg">{exp.title}</h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-yellow-400 font-bold">{exp.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
