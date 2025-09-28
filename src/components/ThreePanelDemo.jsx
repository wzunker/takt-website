import React, { useState } from 'react';
import ChatBubbleAnimation from './ChatBubbleAnimation';
import QuestionDropdown from './QuestionDropdown';

/**
 * Takt Three Panel Demo Component
 * Interactive demo section with hover/tap triggered chat animations
 * Follows brand guidelines: warm colors, curved edges, generous spacing
 */
const ThreePanelDemo = ({ className = '' }) => {
  const [activePanel, setActivePanel] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState({});
  const [loadingPanel, setLoadingPanel] = useState(null);

  const demoScenarios = [
    {
      id: 'receiving-dock',
      title: 'Receiving Dock',
      image: '/loading_dock.png',
      questions: [
        {
          question: 'Why is the raw material shipment delayed?',
          response: 'Shipment #482 from Supplier A is delayed due to a logistics hold at the port. Estimated arrival: Friday, 2 PM.'
        },
        {
          question: 'Which quality control tests are delaying shipment?',
          response: 'Spectroscopy analysis for Batch #146 is still pending, expected results in 2 hours.'
        },
        {
          question: 'Do we have enough Ethylene stock to cover this week\'s production?',
          response: 'Yes, current Ethylene inventory is 3,500 kg, sufficient for 6 days at planned throughput.'
        }
      ]
    },
    {
      id: 'production-floor',
      title: 'Production Floor',
      image: '/machine_maintenance.png',
      questions: [
        {
          question: "Why isn't the pump maintaining correct pressure?",
          response: 'Pump 3 in Unit 2 is running at 60% capacity due to a clogged filter. Replace filter cartridge.'
        },
        {
          question: "What's the downtime trend for this machine?",
          response: 'This machine has logged 5 hours downtime in the past month, down 40% compared to last month.'
        },
        {
          question: 'Why did the last batch fail QC?',
          response: 'Batch #145 failed viscosity spec (target 450–500 cP, measured 390 cP). Root cause likely improper mixing temperature in Reactor 2.'
        }
      ]
    },
    {
      id: 'business-meeting',
      title: 'Business Meeting',
      image: '/business_meeting.png',
      questions: [
        {
          question: 'Is there an operator trained in distillation for the night shift?',
          response: 'Yes, Brian S. is certified in distillation and working tonight.'
        },
        {
          question: 'Which customers contribute the most revenue this quarter?',
          response: 'Top 3 customers: ChemCo ($1.2M), Plastix ($900K), GreenChem ($750K).'
        },
        {
          question: 'How has production efficiency changed month-over-month?',
          response: 'Overall efficiency improved from 82% in August to 88% in September.'
        }
      ]
    }
  ];

  const handleQuestionSelection = (panelId, questionData, questionIndex) => {
    // If selecting the same question, do nothing
    if (selectedQuestions[panelId] && selectedQuestions[panelId].question === questionData.question) {
      return;
    }

    // Show loading state briefly for better UX
    setLoadingPanel(panelId);
    
    // Update selected question for this panel
    setSelectedQuestions(prev => ({
      ...prev,
      [panelId]: questionData
    }));
    
    // Brief delay to show loading, then trigger animation
    setTimeout(() => {
      setLoadingPanel(null);
      setActivePanel(panelId);
    }, 300);
  };

  return (
    <section className={`pt-0 pb-16 md:pt-2 md:pb-24 bg-canvas-cream ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-takt-green mb-6">
            See <span className="text-takt-orange">takt</span> in action
          </h2>
          <p className="text-lg text-iron-grey opacity-80 max-w-2xl mx-auto">
            Experience how Takt transforms every question into instant, accurate answers across your manufacturing operations.
          </p>
        </div>

        {/* Three Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoScenarios.map((scenario) => {
            const selectedQuestion = selectedQuestions[scenario.id];
            const isAnimating = activePanel === scenario.id && selectedQuestion;
            const isLoading = loadingPanel === scenario.id;
            
            return (
              <div
                key={scenario.id}
                className="bg-white rounded-takt shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
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

              {/* Interactive Q&A Area */}
              <div className="p-4 md:p-6 min-h-[380px] flex flex-col">
                {/* Question Dropdown with enhanced mobile spacing */}
                <div className="mb-4 md:mb-6">
                  <label className="block text-sm font-medium text-iron-grey mb-2 md:mb-3">
                    What would you like to ask Takt?
                  </label>
                  <QuestionDropdown
                    questions={scenario.questions}
                    selectedValue={selectedQuestion ? scenario.questions.findIndex(q => q.question === selectedQuestion.question) : ''}
                    onSelectionChange={(questionData, index) => handleQuestionSelection(scenario.id, questionData, index)}
                    placeholder={isLoading ? "Loading..." : "Choose your question..."}
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>

                {/* Chat Animation, Loading, or Default State */}
                <div className="flex-1 flex flex-col justify-center min-h-[240px]">
                  {isLoading ? (
                    <div className="text-center py-6 md:py-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-takt-orange bg-opacity-10 rounded-full">
                        <div className="w-6 h-6 border-2 border-takt-orange border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <p className="text-iron-grey text-sm font-medium">
                        Preparing your question...
                      </p>
                    </div>
                  ) : isAnimating ? (
                    <div className="space-y-3 md:space-y-4">
                      <ChatBubbleAnimation
                        question={selectedQuestion.question}
                        response={selectedQuestion.response}
                        isActive={true}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-6 md:py-8">
                      <div className="text-takt-orange mb-3 animate-pulse">
                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-iron-grey text-sm opacity-70 leading-relaxed">
                        Select a question above to see how Takt provides instant, accurate answers
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreePanelDemo;
