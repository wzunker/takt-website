import React, { useState } from 'react';
import Button from './Button';

/**
 * Takt Call to Action Component
 * Email signup form with Azure backend integration
 * Follows brand guidelines: Takt Orange accents, curved edges, warm feel
 */
const CallToAction = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    email: '',
    companyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Azure Function endpoint
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormData({ email: '', companyName: '' });
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className={`py-16 md:py-24 bg-gradient-to-br from-takt-orange to-amber-orange ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-takt shadow-lg p-8">
              <div className="w-16 h-16 bg-takt-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-iron-grey mb-4">
                Thanks for your interest!
              </h2>
              <p className="text-iron-grey opacity-80">
                You will hear from us soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${className}`}>
      {/* Layered Wave Background */}
      <div className="absolute inset-0">
        {/* Base layer - Canvas Cream */}
        <div className="absolute inset-0 bg-canvas-cream"></div>
        
        {/* Wave Layer 1 - Takt Green */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,300 C300,200 600,350 1200,250 L1200,400 L0,400 Z"
              fill="#3E553C"
              opacity="0.8"
            />
          </svg>
        </div>
        
        {/* Wave Layer 2 - Takt Orange */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,350 C400,250 800,400 1200,300 L1200,400 L0,400 Z"
              fill="#E16809"
              opacity="0.9"
            />
          </svg>
        </div>
        
        {/* Wave Layer 3 - Amber Orange (lightest) */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,380 C200,320 900,420 1200,350 L1200,400 L0,400 Z"
              fill="#CC7A00"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-takt shadow-xl p-8 md:p-10">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-takt-green mb-8">
              Join the wave of <span className="text-takt-orange">next-gen manufacturing.</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-iron-grey mb-2">
                  Email Address <span className="text-takt-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-takt focus:outline-none focus:ring-2 focus:ring-takt-orange focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@company.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Company Name Input */}
              <div className="text-left">
                <label htmlFor="companyName" className="block text-sm font-medium text-iron-grey mb-2">
                  Company Name <span className="text-takt-orange">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-takt focus:outline-none focus:ring-2 focus:ring-takt-orange focus:border-transparent transition-colors ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Manufacturing Company"
                  disabled={isSubmitting}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Signing Up...</span>
                  </div>
                ) : (
                  'Sign Up'
                )}
              </Button>

              {/* Submit Error */}
              {errors.submit && (
                <p className="text-red-500 text-sm text-center">{errors.submit}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
