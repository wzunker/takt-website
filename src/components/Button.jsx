import React from 'react';
import { TAKT_BRAND } from '../constants/brand.js';

/**
 * Takt Button Component
 * Follows brand guidelines: curved edges, warm colors, purposeful motion
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  // Base classes following Takt brand guidelines
  const baseClasses = 'font-poppins font-medium transition-colors duration-200 rounded-takt focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-takt-orange hover:bg-amber-orange text-white focus:ring-takt-orange',
    secondary: 'bg-takt-green hover:bg-opacity-90 text-white focus:ring-takt-green',
    outline: 'border-2 border-takt-orange text-takt-orange hover:bg-takt-orange hover:text-white focus:ring-takt-orange'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-2 text-base',
    large: 'px-8 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
