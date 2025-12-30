/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        label: ['"DM Mono"', 'monospace'],
        display: ['Barlow', 'sans-serif'],
        heading: ['"Ubuntu Sans"', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
    },
  },
  plugins: [],
}
