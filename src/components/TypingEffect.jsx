import React, { useState, useEffect } from 'react';

/**
 * Takt Typing Effect Component
 * Custom typing animation for chat bubbles
 * Follows brand guidelines: smooth animations, purposeful motion
 */
const TypingEffect = ({ 
  text, 
  speed = 60, 
  onComplete, 
  isActive = false,
  className = '' 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isActive && !isTyping && text) {
      setIsTyping(true);
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [isActive, text, isTyping]);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (isTyping && currentIndex >= text.length) {
      setIsTyping(false);
      if (onComplete) {
        setTimeout(() => onComplete(), 300);
      }
    }
  }, [currentIndex, text, speed, isTyping, onComplete]);

  // Reset when not active
  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTyping(false);
    }
  }, [isActive]);

  return (
    <span className={`${className}`}>
      {displayedText}
      {isTyping && (
        <span className="animate-pulse text-takt-orange">|</span>
      )}
    </span>
  );
};

export default TypingEffect;
