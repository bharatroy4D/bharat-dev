import React from "react";
import { Facebook, Twitter, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  // Faster animation setup (no long delay)
  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Social links
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
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-700 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-5 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-around">
        {/* Left Side - Text */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="text-lg text-gray-300">
            Hello, I'm
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl lg:text-5xl font-bold roboto"
          >
            Mr. Bharat Roy
          </motion.h1>

          <motion.h2 variants={item} className="text-xl lg:text-2xl">
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
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 leading-relaxed max-w-2xl"
          >
            I am a passionate MERN-Stack Developer with expertise in modern web
            technologies. I specialize in creating exceptional user experiences
            with clean, efficient code and innovative solutions.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(253,224,71,0.8)]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex gap-4 justify-center lg:justify-start pt-4 flex-wrap"
          >
            <motion.button
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-medium transition-all shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>

            <motion.button
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded font-medium transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <Send className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <div
          className="flex justify-center lg:justify-start mb-10 lg:mb-0"    
        >
          <div className="relative w-80 h-80">
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full "></div>

            {/* Profile Circle */}
            <div className="relative w-full h-full bg-gray-400/70 shadow-[0_0_30px_rgba(6,182,212,0.7)] rounded-full border-2 border-orange-500 overflow-hidden">
              <img
                src="https://i.ibb.co/5gQJ3X1L/1759690342585-1.png"
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
