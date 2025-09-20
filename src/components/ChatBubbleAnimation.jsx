import React, { useState, useEffect } from 'react';

/**
 * Takt Chat Bubble Animation Component
 * Handles the complete chat sequence: question → thinking → response
 * Follows brand guidelines: Takt Orange questions, white responses with logo
 */
const ChatBubbleAnimation = ({ 
  question, 
  response, 
  isActive = false, 
  onComplete,
  className = '' 
}) => {
  const [animationState, setAnimationState] = useState('idle');
  // States: idle, question, thinking, response, complete

  useEffect(() => {
    if (isActive && animationState === 'idle') {
      // Show question immediately
      setAnimationState('question');
      
      // Brief pause, then show thinking
      setTimeout(() => {
        setAnimationState('thinking');
        
        // After thinking, show response
        setTimeout(() => {
          setAnimationState('response');
          if (onComplete) onComplete();
        }, 1200); // Thinking duration
      }, 300); // Brief pause after question appears
    } else if (!isActive) {
      setAnimationState('idle');
    }
  }, [isActive, animationState]);

  const LoadingDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Question Bubble - appears immediately */}
      {(animationState === 'question' || animationState === 'thinking' || animationState === 'response') && (
        <div className="flex justify-end">
          <div className="max-w-xs bg-takt-orange text-white px-4 py-3 rounded-takt rounded-br-sm shadow-md animate-fade-in">
            <p className="text-sm font-medium">
              {question}
            </p>
          </div>
        </div>
      )}

      {/* Thinking Bubble - shows Takt is processing */}
      {animationState === 'thinking' && (
        <div className="flex justify-start">
          <div className="bg-white px-4 py-3 rounded-takt rounded-bl-sm shadow-md border border-gray-100">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-semibold text-takt-orange">Takt</span>
            </div>
            <LoadingDots />
          </div>
        </div>
      )}

      {/* Response Bubble - shows final answer */}
      {animationState === 'response' && (
        <div className="flex justify-start">
          <div className="bg-white px-4 py-3 rounded-takt rounded-bl-sm shadow-md border border-gray-100 max-w-sm animate-fade-in">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-semibold text-takt-orange">Takt</span>
            </div>
            <p className="text-sm text-iron-grey leading-relaxed">
              {response}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubbleAnimation;
