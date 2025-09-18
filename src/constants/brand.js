// Takt Brand Constants
// Based on brand guidelines from brand-guideline/brand-guideline.md

export const COLORS = {
  // Primary Brand Colors
  primary: {
    orange: '#E16809',    // Takt Orange
    green: '#3E553C',     // Takt Green
  },
  
  // Text Colors
  text: {
    primary: '#322E2D',   // Iron Grey
  },
  
  // Background Colors
  background: {
    primary: '#F7F3E9',   // Canvas Cream
  },
  
  // Accent Colors
  accent: {
    amber: '#CC7A00',     // Amber Orange
    solar: '#FFA51F',     // Solar Orange
    sky: '#4B95D1',       // Sky Blue
  }
};

export const TYPOGRAPHY = {
  fontFamily: {
    primary: 'Poppins, sans-serif',
  },
  
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Font hierarchy as per brand guidelines
  hierarchy: {
    headers: {
      fontFamily: 'Poppins',
      fontWeight: 700, // Bold
    },
    body: {
      fontFamily: 'Poppins',
      fontWeight: 400, // Regular
    }
  }
};

export const SPACING = {
  // Following brand guideline: generous white space
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
};

export const BORDER_RADIUS = {
  // Following brand guideline: curved edges, soft corners
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px - Takt standard
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',   // Full rounded
};

export const SHADOWS = {
  // Subtle shadows as per brand guidelines
  sm: '0 1px 2px 0 rgba(50, 46, 45, 0.05)',
  md: '0 4px 6px -1px rgba(50, 46, 45, 0.1), 0 2px 4px -1px rgba(50, 46, 45, 0.06)',
  lg: '0 10px 15px -3px rgba(50, 46, 45, 0.1), 0 4px 6px -2px rgba(50, 46, 45, 0.05)',
};

export const BRAND_VOICE = {
  // Brand voice characteristics from guidelines
  tone: 'friendly, professional, and conversational',
  approach: 'avoid jargon, over-explain when in doubt',
  goal: 'each interaction educates, informs, and includes'
};

export const VISUAL_PRINCIPLES = {
  // Core visual language principles
  feeling: 'inviting, warm, and safe',
  guidelines: [
    'readable typography hierarchy',
    'stick to core palette',
    'curved edges, soft corners',
    'generous white space',
    'subtle shadows/gradients',
    'purposeful motion'
  ]
};

// Component-specific brand constants
export const COMPONENTS = {
  buttons: {
    primary: {
      backgroundColor: COLORS.primary.orange,
      hoverColor: COLORS.accent.amber,
      textColor: '#FFFFFF',
      borderRadius: BORDER_RADIUS.lg,
      padding: {
        y: '0.5rem',
        x: '1.5rem'
      }
    },
    secondary: {
      backgroundColor: COLORS.primary.green,
      hoverColor: COLORS.primary.green + 'E6', // 90% opacity
      textColor: '#FFFFFF',
      borderRadius: BORDER_RADIUS.lg,
      padding: {
        y: '0.5rem',
        x: '1.5rem'
      }
    }
  }
};

// Export default brand object
export const TAKT_BRAND = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
  voice: BRAND_VOICE,
  visual: VISUAL_PRINCIPLES,
  components: COMPONENTS
};

export default TAKT_BRAND;
