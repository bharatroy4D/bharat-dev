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
    <section className=" py-12 md:py-20 bg-gray-800/80 rounded-2xl border shadow-lg hover:shadow-orange-400/30 border-orange-500 mt-6" id="skills">
      <div className="container mx-auto px-6">
         <h2 className="text-3xl font-bold text-white mb-12 flex items-center  justify-center gap-4">
          <span className="w-16 h-0.5 bg-pink-500"></span>
          <h1 className="text-yellow-400">My Skills</h1>
          <span className="w-16 h-0.5 bg-pink-500"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center w-40 h-24 bg-gray-900 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                boxShadow:
                  "0 0 0px rgba(0,0,0,0)", // default no shadow
              }}
            >
              <div className="absolute inset-0 rounded-lg transition-shadow duration-300 group-hover:shadow-[0_0_20px_orange]"></div>

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-white text-sm font-medium text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
