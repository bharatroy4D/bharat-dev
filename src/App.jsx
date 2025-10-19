import React from "react";
import Navbar from "./Components/navbar/Navbar";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Footer from "./Components/footer/Footer";
import Services from "./Pages/services/Services";
import Projects from "./Pages/projects/Projects";
import Banner from "./Pages/banner/Banner";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Skills from "./Pages/skills/Skills";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // 🌙 Theme Context
import "./App.css";

const AppContent = () => {
  const { theme } = useTheme();

  // Theme based classes
  const bgClass =
    theme === "dark"
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-gray-900";

  const gridStroke = theme === "dark" ? "yellow" : "gray";

  return (
    <div className={`relative min-h-screen overflow-hidden z-30 ${bgClass}`}>
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
                  stroke={gridStroke}
                  strokeWidth=""
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

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
                  stroke={gridStroke}
                  strokeWidth=""
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
        <Skills />
        <Services />
        <Projects />
        <Contact />
      <ScrollToTop />
      </div>

      <Footer />
    </div>
  );
};

// Wrap App in ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
