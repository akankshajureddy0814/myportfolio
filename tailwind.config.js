/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0a0e1a',
        surface: '#111827',
        surface2: '#1a2236',
        accent: '#00d4ff',
        accent2: '#7c3aed',
        accent3: '#10b981',
        muted: '#64748b',
      },
    },
  },
  plugins: [],
}