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
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="p-2 rounded-takt transition-all duration-200 hover:bg-canvas-cream hover:shadow-sm">
            <img 
              src="/logo-takt.png" 
              alt="Takt - AI retrieval engine for production teams" 
              className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-200 hover:scale-105"
            />
          </div>
          
          {/* Right Side - Demo Button and Contact */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Demo Button */}
            <a
              href="https://app.taktconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 md:px-6 bg-takt-orange hover:bg-amber-600 text-white font-semibold rounded-takt shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs md:text-sm"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="hidden sm:inline">Try Takt for Free</span>
              <span className="sm:hidden">Try Free</span>
            </a>
            
            {/* Separator - hidden on very small screens */}
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            
            {/* Contact Section */}
            <div className="text-center">
              <div className="hidden md:block text-xs text-iron-grey opacity-70 mb-1">Want to learn more?</div>
              <a
                href="mailto:araghavan@taktconnect.com"
                className="inline-flex items-center text-iron-grey hover:text-takt-orange transition-colors duration-200 font-medium"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs md:text-sm hidden sm:inline">araghavan@taktconnect.com</span>
                <span className="text-xs sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
