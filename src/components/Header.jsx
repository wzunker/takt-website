import React from 'react';

/**
 * Takt Header Component
 * Fixed header with left-aligned logo
 * Follows brand guidelines: curved edges, generous white space
 */
const Header = ({ className = '' }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full py-2 bg-white border-b border-gray-100 shadow-sm ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-start items-center">
          <div className="p-2 rounded-takt transition-all duration-200 hover:bg-canvas-cream hover:shadow-sm">
            <img 
              src="/logo-takt.png" 
              alt="Takt - AI retrieval engine for production teams" 
              className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-200 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
