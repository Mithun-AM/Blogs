/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode based on the class
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#333333',
          secondaryText: '#555555',
          accent: '#BB86FC',
          buttonBg: '#E0E0E0',
          buttonHover: '#CCCCCC',
          border: '#DDDDDD',
        },
        dark: {
          background: '#121212',
          text: '#E0E0E0',
          secondaryText: '#B0B0B0',
          accent: '#BB86FC',
          buttonBg: '#333333',
          buttonHover: '#444444',
          border: '#3C3C3C',
        },
      },
    },
  },
  plugins: [],
};
