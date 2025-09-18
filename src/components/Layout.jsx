import React from 'react';

/**
 * Takt Layout Component
 * Provides consistent layout structure following brand guidelines:
 * - Canvas Cream background
 * - Generous white space
 * - Responsive design
 * - Warm, inviting feel
 */
const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-canvas-cream text-iron-grey font-poppins ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
