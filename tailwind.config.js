/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0a0a0a', soft: '#111111', card: '#161616', line: '#262626', muted: '#6b6b6b', text: '#e8e6e1', dim: '#9a9890' },
        copper: { DEFAULT: '#c8874a', light: '#e8b882', dim: '#8a5a2e' },
        sage: { DEFAULT: '#4a8f7a', light: '#6db89e' },
      },
    },
  },
};
