// GridBackground.jsx (React component)
import React from "react";

const GridBackground = ({ className = "" }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export default GridBackground;
