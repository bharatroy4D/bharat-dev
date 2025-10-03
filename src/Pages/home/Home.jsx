import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-800 text-white rounded-2xl relative overflow-hidden my-7">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Side - Profile Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>

                            {/* Profile circle with border */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
                                {/* Placeholder for profile image - replace with actual image */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center">
                                    <img src="https://i.ibb.co.com/N6KkdTV8/hero-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        {/* Greeting */}
                        <div className="text-lg text-gray-300">
                            Hello, I'm
                        </div>

                        {/* Name */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-white roboto">
                            Mr.Bharat Roy
                        </h1>

                        {/* Title with gradient */}
                        <h2 className="text-2xl lg:text-3xl">
                            <span className="text-gray-300">And I'm a </span> <br />
                            <h2 className="">
                                <span className="text-yellow-400">{'{'}</span>
                                <span className="text-cyan-400">Mern stack Developer</span>
                                <span className="text-yellow-400">{'}'}</span>
                            </h2>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis lacus
                            scelerisque quis volutpat porta consectetur, suspendisse imperdiet ut pharetra?
                        </p>

                      {/* Social Media Icons */}
<div className="flex gap-4 justify-center lg:justify-start">
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(249,115,22,0.7)]"
  >
    <Facebook className="w-5 h-5" />
  </a>

  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(249,115,22,0.7)]"
  >
    <Twitter className="w-5 h-5" />
  </a>

  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(249,115,22,0.7)]"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(249,115,22,0.7)]"
  >
    <Instagram className="w-5 h-5" />
  </a>
</div>


                        {/* CTA Buttons */}
                        <div className="flex gap-4 justify-center lg:justify-start pt-4">
                            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-medium transition-all shadow-lg shadow-cyan-500/30">
                                Hire Me
                            </button>
                            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded font-medium transition-all flex items-center gap-2">
                                Contact Me <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;