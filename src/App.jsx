import React from "react";
import Navbar from "./Components/navbar/Navbar";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Footer from "./Components/footer/Footer";
import Services from "./Pages/services/Services";
import Projects from "./Pages/projects/Projects";
import Banner from "./Pages/banner/Banner";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";
import Skills from "./Pages/skills/Skills";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden z-30 bg-gray-900">
      <div className="">
        {/* Animated Background Grid Lines */}
        <div className="absolute -z-20 inset-0 overflow-hidden opacity-20">
          <div className="grid-wrapper">
            <svg className="grid-svg">
              <defs>
                <pattern
                  id="grid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="rgba(96, 165, 250, 0.8)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Duplicate for seamless effect */}
            <svg className="grid-svg">
              <defs>
                <pattern
                  id="grid2"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="rgba(96, 165, 250, 0.8)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>
        </div>
        {/* Page Content */}
        <div className="container mx-auto py-6 px-4 lg:px-15 poppins z-10">
          <Navbar />
          <Banner />
          <About />
          <Skills/>
          <Services />
          <Projects />
          <Contact />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
