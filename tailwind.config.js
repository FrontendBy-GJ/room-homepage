/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        DarkGray: 'hsl(0, 0%, 63%)',
        VeryDarkGray: 'hsl(0, 0%, 27%)',
      },
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
};
