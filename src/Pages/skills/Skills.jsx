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
import { useTheme } from "../../context/themeContext"; // 🌙 Theme Context import

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Figma", icon: <SiFigma /> },
];

const Skills = () => {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <section
      id="skills"
      className={`py-12 md:py-20 rounded-2xl border shadow-lg transition-all duration-500 mt-6 ${
        theme === "dark"
          ? "bg-gray-800/80 border-yellow-500 hover:shadow-yellow-400/30"
          : "bg-gray-100/70 border-blue-400 hover:shadow-blue-400/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
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
            My Skills
          </h1>
          <span
            className={`w-16 h-0.5 transition-colors duration-300 ${
              theme === "dark" ? "bg-pink-500" : "bg-blue-500"
            }`}
          ></span>
        </h2>

        <div className=" grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center justify-center w-36 md:w-40 h-24 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-900 text-white hover:shadow-[0_0_20px_rgba(253,224,71,0.6)]"
                  : "bg-white text-gray-900 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              }`}
            >
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div
                  className={`text-4xl mb-2 ${
                    skill.name === "HTML5"
                      ? "text-orange-500"
                      : skill.name === "CSS3"
                      ? "text-blue-500"
                      : skill.name === "JavaScript"
                      ? "text-yellow-400"
                      : skill.name === "React"
                      ? "text-cyan-400"
                      : skill.name === "Tailwind CSS"
                      ? "text-sky-400"
                      : skill.name === "Bootstrap"
                      ? "text-purple-500"
                      : skill.name === "Node.js"
                      ? "text-green-500"
                      : skill.name === "Git"
                      ? "text-red-500"
                      : skill.name === "GitHub"
                      ? "text-gray-100"
                      : skill.name === "Postman"
                      ? "text-orange-600"
                      : skill.name === "Vercel"
                      ? "text-gray-800"
                      : skill.name === "Redux"
                      ? "text-purple-400"
                      : skill.name === "Express"
                      ? "text-gray-500"
                      : skill.name === "MongoDB"
                      ? "text-green-600"
                      : skill.name === "Figma"
                      ? "text-pink-500"
                      : ""
                  }`}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
