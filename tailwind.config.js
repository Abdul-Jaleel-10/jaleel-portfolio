/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF', // Royal Blue
        'primary-hover': '#1E3A8A',
        'secondary': '#FFD700', // Gold
        'dark': '#0A0A0A',
        'dark-light': '#121212',
        'dark-lighter': '#1A1A1A',
        'light': '#F8F9FA',
        'gray': {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
        },
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          'from': { 'transform': 'translateX(-100%)' },
          'to': { 'transform': 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-shine': 'linear-gradient(45deg, transparent 45%, rgba(255,215,0,0.1) 50%, transparent 55%)',
      },
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
} 