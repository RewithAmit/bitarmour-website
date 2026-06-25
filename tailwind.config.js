/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#000000',
          deep: '#050510',
        },
        neon: {
          cyan: '#00F5FF',
          violet: '#7B00FF',
          magenta: '#FF00C8',
        },
        cyber: {
          dark: '#0a0a1a',
          panel: '#0d0d20',
          glass: 'rgba(10, 10, 30, 0.6)',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'text-flicker': 'text-flicker 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ripple': 'ripple 1s ease-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 245, 255, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)' },
        },
        'text-flicker': {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.3' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.5' },
          '97%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(0, 245, 255, 0.4)' },
          '50%': { borderColor: 'rgba(0, 245, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
