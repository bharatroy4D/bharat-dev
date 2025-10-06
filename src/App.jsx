import React from 'react';
import Navbar from './Components/navbar/Navbar';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Footer from './Components/footer/Footer';
import Services from './Pages/services/Services';
import Projects from './Pages/projects/Projects';
import Banner from './Pages/banner/Banner';

const App = () => {
  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Grid Lines */}
        <div className="absolute -z-10 inset-0 overflow-hidden opacity-20">
          <svg className="absolute w-full h-full">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(96, 165, 250, 0.7)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className='container mx-auto  py-6 px-4 lg:px-10 poppins'>
          <Navbar />
          <Banner/>
          {/* <About /> */}
          {/* <Services /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
