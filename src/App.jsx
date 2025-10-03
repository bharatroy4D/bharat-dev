import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className='container mx-auto  py-4 px-4 lg:px-10 poppins'>
      <div className="min-h-screen  relative overflow-hidden">
        {/* Animated Background Grid Lines */}
        <div className="absolute -z-10 inset-0 overflow-hidden opacity-10">
          <svg className="absolute w-full h-full">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
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

        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
