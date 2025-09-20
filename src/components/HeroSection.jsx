import React from 'react';

/**
 * Takt Hero Section Component
 * Main hero area with fire-fighting squad messaging
 * Enhanced visual design: smooth animations, curved edges, optimized spacing
 * Follows brand guidelines: Poppins font, Takt Orange accents, generous spacing
 */
const HeroSection = ({ className = '' }) => {
  return (
    <section className={`pt-32 pb-20 md:pt-40 md:pb-32 bg-canvas-cream relative overflow-hidden ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-takt-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-takt-green rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Primary Headline with enhanced animations */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <div className="text-takt-green">Your <span className="text-takt-orange relative inline-block hover:scale-105 transition-transform duration-300">
              fire-fighting squad
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-takt-orange opacity-20 rounded-full"></div>
            </span></div>
            <div className="text-takt-green">for every <span className="text-takt-orange relative inline-block hover:scale-105 transition-transform duration-300">
              hair-on-fire
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-takt-orange opacity-20 rounded-full"></div>
            </span> production moment.</div>
          </h1>
          
          {/* Supporting Subtext with Production Floor Card */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="max-w-4xl mx-auto mb-12">
              {/* Text and Image Card - Stacked Layout */}
              <div className="bg-white rounded-takt shadow-lg overflow-hidden border border-gray-100">
                {/* Text Content - Top */}
                <div className="p-8 md:p-10">
                  <p className="text-lg md:text-xl text-iron-grey leading-relaxed font-medium text-center">
                    Takt is a purpose-built <span className="text-takt-orange font-semibold">AI retrieval engine</span> for production teams—turning every input into output,
                    delivering perfect, accurate, relevant info at your fingertips.
                  </p>
                </div>
                
                {/* Production Floor Image - Bottom */}
                <div className="relative bg-gradient-to-br from-canvas-cream to-gray-100">
                  <img
                    src="/production_floor.png"
                    alt="Manufacturing production floor showcasing industrial operations and equipment"
                    className="w-full h-auto object-cover max-h-64 md:max-h-80"
                  />
                  {/* Subtle overlay for visual cohesion */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
