/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode based on the class
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F3F4F6', // Softer off-white to reduce strain
          text: '#2C2E33', // Dark gray for better readability
          secondaryText: '#4A4D52', // Muted gray for subtitles
          accent: '#8A75F0', // Calmer purple accent
          buttonBg: '#E3E6EB', // Softer gray button background
          buttonHover: '#CBD2D9', // Slightly darker gray on hover
          border: '#D1D5DB', // Subtle gray border
        },
        dark: {
          background: '#1A1D23', // Darker gray, but not pure black
          text: '#C5C9D1', // Softer off-white text
          secondaryText: '#9BA3AF', // Muted gray for secondary text
          accent: '#A78BFA', // Softer purple for accents
          buttonBg: '#2A2F36', // Slightly lighter than background
          buttonHover: '#3A414C', // A bit more contrast on hover
          border: '#3E4854', // Subtle border for dark mode
        },
      },
    },
  },
  plugins: [],
};
