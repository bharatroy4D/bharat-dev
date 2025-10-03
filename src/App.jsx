import React from 'react';
import Navbar from './Components/navbar/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(96, 165, 250, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Navbar />
    </div>
  );
};

export default App;
