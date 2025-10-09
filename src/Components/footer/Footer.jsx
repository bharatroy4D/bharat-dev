import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800/80 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Name Section */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-lime-400 text-2xl font-mono">&lt;/&gt;</span>
          <span className="text-white text-2xl font-semibold">Bharat</span>
          <span className="text-gray-400 text-2xl font-semibold">roy</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-2 md:mb-5">
          {/* GitHub */}
          <a
            href="#"
            className="p-2 hover:bg-slate-800 rounded transition-colors"
          >
            <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="p-2 hover:bg-slate-800 rounded transition-colors"
          >
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>

          {/* Dev.to */}
          <a
            href="#"
            className="p-2 hover:bg-slate-800 rounded transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="#"
            className="p-2 hover:bg-slate-800 rounded transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-8  md:mb-5 flex-wrap">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
            About Me
          </a>
          <a href="#resume" className="text-gray-400 hover:text-white transition-colors text-sm">
            Resume
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
            Services
          </a>
          <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
            Portfolio
          </a>
          <a href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">
            Blog
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 Bharat roy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;