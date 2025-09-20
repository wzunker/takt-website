import React from 'react';

/**
 * Takt Layout Component
 * Provides consistent layout structure following brand guidelines:
 * - Canvas Cream background
 * - Generous white space
 * - Responsive design
 * - Warm, inviting feel
 * - Full page structure with header, main, and footer areas
 */
const Layout = ({ children, className = '', includeContainer = true }) => {
  if (includeContainer) {
    return (
      <div className={`min-h-screen bg-canvas-cream text-iron-grey font-poppins ${className}`}>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-canvas-cream text-iron-grey font-poppins ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
