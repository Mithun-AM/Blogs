/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F3F4F6',
          text: '#2C2E33',
          secondaryText: '#4A4D52', 
          accent: '#8A75F0',
          buttonBg: '#E3E6EB',
          buttonHover: '#CBD2D9',
          border: '#D1D5DB',
        },
        dark: {
          background: '#1A1D23',
          text: '#C5C9D1',
          secondaryText: '#9BA3AF',
          accent: '#A78BFA',
          buttonBg: '#2A2F36',
          buttonHover: '#3A414C',
          border: '#3E4854',
        },
      },
    },
  },
  plugins: [],
};
