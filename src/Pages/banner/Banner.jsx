import React from "react";
import { Facebook, Twitter, Linkedin, Github, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/profileImg.png";
import { useTheme } from "../../context/themeContext"; // 🌙 Import Theme Context

const Banner = () => {
  const { theme } = useTheme(); // ✅ Access current theme (dark/light)

  const socialLinks = [
    { icon: Facebook, link: "https://www.facebook.com/bharatroyfb" },
    { icon: Twitter, link: "#" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/bharatroy/" },
    { icon: Github, link: "https://github.com/bharatroy4D" },
  ];

  return (
    <div
      id="banner"
      className={`relative rounded-2xl overflow-hidden border my-6 shadow-lg transition-all duration-500 ${
        theme === "dark"
          ? "bg-slate-800/80 border-yellow-500 hover:shadow-yellow-400/30 text-white"
          : "bg-gray-100/70 border-blue-400 hover:shadow-blue-400/30 text-gray-900"
      }`}
    >
      <div className="relative z-10 container mx-auto px-8 py-14 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-around">
        {/* 🟢 Left Side - Text */}
        <div className="space-y-6 text-center lg:text-left">
          <div
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hello, I'm
          </div>

          <h1
            className={`text-3xl lg:text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Mr. Bharat Roy
          </h1>

          <h2 className="text-xl lg:text-2xl">
            <span
              className={`${
                theme === "dark" ? "text-yellow-400" : "text-blue-500"
              }`}
            >
              {"{"}
            </span>
            <span
              className={`${
                theme === "dark" ? "text-cyan-400" : "text-purple-600"
              }`}
            >
              <Typewriter
                words={["MERN Stack Developer", "React Enthusiast"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
            <span
              className={`${
                theme === "dark" ? "text-yellow-400" : "text-blue-500"
              }`}
            >
              {"}"}
            </span>
          </h2>

          <p
            className={`leading-relaxed max-w-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I am a passionate MERN-Stack Developer with expertise in modern web
            technologies. I specialize in creating exceptional user experiences
            with clean, efficient code and innovative solutions.
          </p>

          {/* 🟢 Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded border-2 transition-all shadow-md ${
                    theme === "dark"
                      ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-cyan-400/40"
                      : "border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white shadow-blue-300/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* 🟢 Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4 flex-wrap">
            <button
              className={`px-8 py-3 rounded font-medium transition-all shadow-lg ${
                theme === "dark"
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/30"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30"
              }`}
            >
              Hire Me
            </button>

            <button
              className={`px-8 py-3 border-2 rounded font-medium transition-all flex items-center gap-2 ${
                theme === "dark"
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  : "border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Contact Me <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 🟢 Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div className="relative w-80 h-80">
            <div
              className={`relative w-full h-full rounded-full overflow-hidden border-2 shadow-xl ${
                theme === "dark"
                  ? "bg-gray-700 border-yellow-400 shadow-yellow-400/40"
                  : "bg-gray-200 border-blue-400 shadow-blue-400/40"
              }`}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
