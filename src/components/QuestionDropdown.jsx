import React from 'react';

/**
 * Takt Question Dropdown Component
 * Styled dropdown for selecting Q&A pairs in demo panels
 * Follows brand guidelines: Takt Orange accents, curved edges, accessible design
 */
const QuestionDropdown = ({ 
  questions = [], 
  selectedValue = '', 
  onSelectionChange,
  placeholder = "Choose a question...",
  className = '',
  disabled = false
}) => {
  const handleChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex >= 0 && selectedIndex < questions.length) {
      onSelectionChange(questions[selectedIndex], selectedIndex);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="question-select" className="sr-only">
        Select a question to ask Takt
      </label>
      <select
        id="question-select"
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
        className={`
          w-full px-4 py-3 pr-12
          bg-white border-2 border-gray-200
          rounded-takt text-iron-grey font-medium
          focus:outline-none focus:ring-2 focus:ring-takt-orange focus:border-takt-orange
          hover:border-takt-orange transition-colors duration-200
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50
          appearance-none cursor-pointer
          text-sm md:text-base leading-relaxed
          shadow-sm hover:shadow-md focus:shadow-lg
          min-h-[44px] touch-manipulation
        `}
        style={{
          backgroundImage: 'none'
        }}
        aria-label="Select a question to ask Takt"
      >
        <option value="" disabled className="text-gray-500 italic">
          {placeholder}
        </option>
        {questions.map((question, index) => (
          <option 
            key={index} 
            value={index}
            className="py-3 px-2 text-iron-grey font-normal leading-relaxed bg-white hover:bg-canvas-cream"
            style={{
              padding: '12px 8px',
              lineHeight: '1.4',
              backgroundColor: 'white'
            }}
          >
            {question.question}
          </option>
        ))}
      </select>
      
      {/* Custom dropdown arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <div className="bg-takt-orange bg-opacity-10 rounded-full p-1">
          <svg 
            className="w-4 h-4 text-takt-orange" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default QuestionDropdown;
