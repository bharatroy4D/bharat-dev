import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {

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

    return (
        <div className=" bg-slate-800 text-white rounded-2xl relative overflow-hidden border border-orange-500 my-6">

            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-700 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-8 py-">
                <div className="flex justify-around items-center  min-h-screen">

                    {/* Right Side - Content with animation */}
                    <motion.div
                        className="space-y-6 text-center lg:text-left"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item} className="text-lg text-gray-300">
                            Hello, I'm
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className="text-4xl lg:text-5xl font-bold roboto
             bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 
             bg-clip-text text-transparent"
                        >
                            Mr.Bharat Roy
                        </motion.h1>
                        <motion.h2 variants={item} className="text-xl lg:text-2xl">
                            <span className="text-yellow-400">{'{'}</span>
                            <span className="text-cyan-400">
                                <Typewriter
                                    words={["Mern stack Developer", "React Enthusiast"]}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                            <span className="text-yellow-400">{'}'}</span>
                        </motion.h2>


                        <motion.p variants={item} className="text-gray-300  leading-relaxed max-w-2xl">
                            I am a passionate MERN-Stack Developer with expertise in modern web technologies. I specialize in creating exceptional user experiences with clean, efficient code and innovative solutions.
                        </motion.p>

                        <motion.div variants={item} className="flex gap-4 justify-center lg:justify-start">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    variants={item}
                                    className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(253,224,71,0.8)]"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div variants={item} className="flex gap-4 justify-center lg:justify-start pt-4">
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
                    {/* Left Side - Profile Image with animation */}
                    <motion.div
                        className="flex justify-center lg:justify-start"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item} className="relative">

                            {/* Soft glowing border effect */}
                            <motion.div
                                variants={item}
                                className="absolute inset-0 
                           rounded-full blur-xl opacity-30 animate-[pulse_5s_ease-in-out_infinite]"
                            ></motion.div>

                            {/* Profile circle with border */}
                            <motion.div
                                variants={item}
                                className="relative w-80 h-80 bg-gray-400 rounded-full border-2 border-orange-500 overflow-hidden "
                            >
                                <motion.img
                                    variants={item}
                                    src="https://i.ibb.co.com/5gQJ3X1L/1759690342585-1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Home;
