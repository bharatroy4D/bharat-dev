import React from "react";
import { Facebook, Twitter, Linkedin, Github, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/profileImg.png"

const Banner = () => {
  const socialLinks = [
    { icon: Facebook, link: "https://www.facebook.com/bharatroyfb" },
    { icon: Twitter, link: "#" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/bharatroy/" },
    { icon: Github, link: "https://github.com/bharatroy4D" },
  ];

  return (
    <div
      id="banner"
      className="bg-slate-800/80 text-white rounded-2xl relative overflow-hidden border border-orange-500 my-6 shadow-lg hover:shadow-orange-400/30"
    >
      <div className="relative z-10 container mx-auto px-8 md:py-25 flex flex-col-reverse lg:flex-row items-center justify-around">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="text-lg text-gray-300">Hello, I'm</div>

          <h1 className="text-4xl lg:text-5xl font-bold roboto">
            Mr. Bharat Roy
          </h1>

          <h2 className="text-xl lg:text-2xl">
            <span className="text-yellow-400">{'{'}</span>
            <span className="text-cyan-400">
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
            <span className="text-yellow-400">{'}'}</span>
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-2xl">
            I am a passionate MERN-Stack Developer with expertise in modern web
            technologies. I specialize in creating exceptional user experiences
            with clean, efficient code and innovative solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(253,224,71,0.8)]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4 flex-wrap">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-medium transition-all shadow-lg shadow-cyan-500/30">
              Hire Me
            </button>

            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded font-medium transition-all flex items-center gap-2">
              Contact Me <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div className="relative w-80 h-80">
            <div className="relative w-full h-full bg-gray-400/50 shadow-[0_0_30px_rgba(6,182,212,0.7)] rounded-full border-2 border-orange-500 overflow-hidden">
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
