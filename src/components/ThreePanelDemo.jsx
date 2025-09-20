import React, { useState } from 'react';
import ChatBubbleAnimation from './ChatBubbleAnimation';

/**
 * Takt Three Panel Demo Component
 * Interactive demo section with hover/tap triggered chat animations
 * Follows brand guidelines: warm colors, curved edges, generous spacing
 */
const ThreePanelDemo = ({ className = '' }) => {
  const [activePanel, setActivePanel] = useState(null);

  const demoScenarios = [
    {
      id: 'receiving-dock',
      title: 'Receiving Dock',
      image: '/loading_dock.png',
      question: 'Why is the raw material shipment delayed?',
      response: 'Shipment #482 from Supplier A is delayed due to a logistics hold at the port. Estimated arrival: Friday, 2 PM.'
    },
    {
      id: 'production-floor',
      title: 'Production Floor',
      image: '/machine_maintenance.png',
      question: "Why isn't the pump maintaining correct pressure?",
      response: 'Pump 3 in Unit 2 is running at 60% capacity due to a clogged filter. Replace filter cartridge.'
    },
    {
      id: 'business-meeting',
      title: 'Business Meeting',
      image: '/business_meeting.png',
      question: 'What are our top chemical orders this month and due dates?',
      response: 'Top 3 orders: Order #2205 (Polyethylene, Sept 25), #2207 (Methanol, Sept 28), #2208 (Styrene, Oct 2).'
    }
  ];

  const handlePanelHover = (panelId) => {
    setActivePanel(panelId);
  };

  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  const handlePanelClick = (panelId) => {
    // For mobile: toggle active state
    setActivePanel(activePanel === panelId ? null : panelId);
  };

  return (
    <section className={`py-16 md:py-24 bg-canvas-cream ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-iron-grey mb-6">
            See <span className="text-takt-orange">Takt</span> in Action
          </h2>
          <p className="text-lg text-iron-grey opacity-80 max-w-2xl mx-auto">
            Experience how Takt transforms every question into instant, accurate answers across your manufacturing operations.
          </p>
        </div>

        {/* Three Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-white rounded-takt shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
              onMouseEnter={() => handlePanelHover(scenario.id)}
              onMouseLeave={handlePanelLeave}
              onClick={() => handlePanelClick(scenario.id)}
            >
              {/* Panel Image */}
              <div className="relative h-48 bg-gradient-to-br from-canvas-cream to-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                    {scenario.title}
                  </h3>
                </div>
              </div>

              {/* Chat Animation Area */}
              <div className="p-6 min-h-[200px] flex flex-col justify-center">
                {activePanel === scenario.id ? (
                  <ChatBubbleAnimation
                    question={scenario.question}
                    response={scenario.response}
                    isActive={true}
                    className="w-full"
                  />
                ) : (
                  <div className="text-center py-8">
                    <div className="text-takt-orange mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-iron-grey text-sm opacity-70">
                      Hover or tap to see Takt in action
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePanelDemo;
