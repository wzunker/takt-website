import React from 'react';

/**
 * Takt Team and Funders Section
 * Displays Team on the left and Funders on the right in equal height cards
 * Follows brand guidelines: Takt Orange accents, curved edges, warm feel
 */
const TeamFundersSection = ({ className = '' }) => {
  const teamMembers = [
    {
      name: 'Adhitya Raghavan',
      title: 'CEO',
      linkedinUrl: 'https://www.linkedin.com/in/adhitya-raghavan/'
    },
    {
      name: 'William Zunker',
      title: 'CTO',
      linkedinUrl: 'https://www.linkedin.com/in/william-zunker-04333a16b/'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-canvas-cream ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Team Section - Left Side */}
          <div className="bg-white/95 backdrop-blur-sm rounded-takt shadow-xl p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-takt-green mb-8">
              Founding Team:
            </h3>
            
            <div className="space-y-6 flex-grow">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-iron-grey text-lg">{member.name}</div>
                    <div className="text-iron-grey opacity-70">{member.title}</div>
                  </div>
                  
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-takt-orange hover:bg-amber-600 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Funders Section - Right Side */}
          <div className="bg-white/95 backdrop-blur-sm rounded-takt shadow-xl p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-takt-green mb-8">
              Funded by the Best:
            </h3>
            
            <div className="flex-grow flex items-center justify-center">
              <img 
                src="/Pear_VC_logo.png" 
                alt="Pear VC" 
                className="h-28 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamFundersSection;
