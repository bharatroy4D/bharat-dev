import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-100" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-6 w-full bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="text-5xl mb-4 animate-bounce-slow">{skill.icon}</div>
                <span className="text-white font-semibold text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
