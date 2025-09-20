import React from 'react';

/**
 * Takt Hero Section Component
 * Main hero area with fire-fighting squad messaging
 * Enhanced visual design: smooth animations, curved edges, optimized spacing
 * Follows brand guidelines: Poppins font, Takt Orange accents, generous spacing
 */
const HeroSection = ({ className = '' }) => {
  return (
    <section className={`py-20 md:py-32 bg-canvas-cream relative overflow-hidden ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-takt-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-takt-green rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Primary Headline with enhanced animations */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-iron-grey mb-8 leading-tight animate-fade-in-up">
            Your <span className="text-takt-orange relative inline-block hover:scale-105 transition-transform duration-300">
              fire-fighting squad
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-takt-orange opacity-20 rounded-full"></div>
            </span> for every{' '}
            <span className="text-takt-orange relative inline-block hover:scale-105 transition-transform duration-300">
              hair-on-fire
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-takt-orange opacity-20 rounded-full"></div>
            </span> moment.
          </h1>
          
          {/* Supporting Subtext with improved spacing */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl lg:text-2xl text-iron-grey opacity-85 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Takt is a purpose-built <span className="text-takt-orange font-semibold">AI retrieval engine</span> for production teams—turning every input into output, 
              delivering perfect, accurate, relevant info at your fingertips.
            </p>
          </div>
          
          {/* Enhanced Delta Symbol Integration */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="flex justify-center items-center space-x-6 mt-16">
              {/* Left decorative elements */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-takt-orange rounded-full opacity-40 animate-pulse"></div>
                <div className="w-3 h-3 bg-takt-orange rounded-full opacity-60 animate-pulse animation-delay-100"></div>
              </div>
              
              {/* Main delta symbol with enhanced styling */}
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-takt-orange to-amber-orange rounded-takt shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:rotate-3">
                  <span className="text-white text-2xl font-bold">δ</span>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-16 h-16 bg-takt-orange rounded-takt opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Right decorative elements */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-takt-orange rounded-full opacity-60 animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-takt-orange rounded-full opacity-40 animate-pulse animation-delay-300"></div>
              </div>
            </div>
            
            {/* Subtle description */}
            <p className="text-sm text-iron-grey opacity-60 mt-4 font-medium">
              Inspired by the Dirac delta function
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
