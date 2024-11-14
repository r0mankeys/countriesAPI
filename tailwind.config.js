/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        tiny: '422px',
      },
      colors: {
        'dark-nav': 'hsl(210, 8.5%, 17.6%)',
      },
      spacing: {
        card: '22rem',
      },
    },
  },
  plugins: [],
};
