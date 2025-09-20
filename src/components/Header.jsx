import React from 'react';

/**
 * Takt Header Component
 * Clean, minimal header with centered logo
 * Follows brand guidelines: curved edges, generous white space
 */
const Header = ({ className = '' }) => {
  return (
    <header className={`w-full py-6 bg-canvas-cream ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <img 
            src="/logo-takt.png" 
            alt="Takt - AI retrieval engine for production teams" 
            className="h-12 md:h-16 w-auto transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
