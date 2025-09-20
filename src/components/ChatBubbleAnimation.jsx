import React, { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';

/**
 * Takt Chat Bubble Animation Component
 * Handles the complete chat sequence: typing → send → loading → response
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
  // States: idle, typing, sent, loading, response, complete

  useEffect(() => {
    if (isActive && animationState === 'idle') {
      setAnimationState('typing');
    } else if (!isActive) {
      setAnimationState('idle');
    }
  }, [isActive, animationState]);

  const handleTypingComplete = () => {
    setAnimationState('sent');
    setTimeout(() => {
      setAnimationState('loading');
      setTimeout(() => {
        setAnimationState('response');
        setTimeout(() => {
          setAnimationState('complete');
          if (onComplete) onComplete();
        }, 2000); // Show response for 2 seconds
      }, 1000); // Loading for 1 second
    }, 500); // Pause after typing
  };

  const LoadingDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-takt-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Question Bubble */}
      {(animationState === 'typing' || animationState === 'sent' || animationState === 'loading' || animationState === 'response' || animationState === 'complete') && (
        <div className="flex justify-end">
          <div className="max-w-xs bg-takt-orange text-white px-4 py-3 rounded-takt rounded-br-sm shadow-md transition-all duration-300">
            <TypingEffect
              text={question}
              speed={60}
              isActive={animationState === 'typing'}
              onComplete={handleTypingComplete}
              className="text-sm font-medium"
            />
          </div>
        </div>
      )}

      {/* Loading Bubble */}
      {animationState === 'loading' && (
        <div className="flex justify-start">
          <div className="bg-white px-4 py-3 rounded-takt rounded-bl-sm shadow-md border border-gray-100">
            <LoadingDots />
          </div>
        </div>
      )}

      {/* Response Bubble */}
      {(animationState === 'response' || animationState === 'complete') && (
        <div className="flex justify-start items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-takt-orange rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">δ</span>
            </div>
          </div>
          <div className="bg-white px-4 py-3 rounded-takt rounded-bl-sm shadow-md border border-gray-100 max-w-sm">
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
