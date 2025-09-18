/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Takt Brand Colors
        'takt-orange': '#E16809',
        'takt-green': '#3E553C',
        'iron-grey': '#322E2D',
        'canvas-cream': '#F7F3E9',
        'amber-orange': '#CC7A00',
        'solar-orange': '#FFA51F',
        'sky-blue': '#4B95D1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        // Brand guideline: curved edges, soft corners
        'takt': '0.75rem',
      }
    },
  },
  plugins: [],
}

