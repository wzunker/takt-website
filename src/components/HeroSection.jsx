import React from 'react';

/**
 * Takt Hero Section Component
 * Main hero area with fire-fighting squad messaging
 * Follows brand guidelines: Poppins font, Takt Orange accents, generous spacing
 */
const HeroSection = ({ className = '' }) => {
  return (
    <section className={`py-16 md:py-24 bg-canvas-cream ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primary Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-iron-grey mb-6 leading-tight">
            Your <span className="text-takt-orange">fire-fighting squad</span> for every{' '}
            <span className="text-takt-orange">hair-on-fire</span> moment.
          </h1>
          
          {/* Supporting Subtext */}
          <p className="text-lg md:text-xl text-iron-grey opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Takt is a purpose-built AI retrieval engine for production teams—turning every input into output, 
            delivering perfect, accurate, relevant info at your fingertips.
          </p>
          
          {/* Optional Delta Symbol Integration */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="w-2 h-2 bg-takt-orange rounded-full opacity-60"></div>
            <div className="w-8 h-8 bg-takt-orange rounded-takt flex items-center justify-center opacity-80">
              <span className="text-white text-lg font-bold">δ</span>
            </div>
            <div className="w-2 h-2 bg-takt-orange rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
