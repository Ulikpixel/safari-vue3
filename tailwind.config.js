/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: '#F5F5F5',
      pink: '#ED165F',
      beige: '#F3ECDB',
      blue: '#465BA3',
      black: '#000000',
      orange: '#F07B4E',
      green: '#41854D',
      brown: '#665147',
      purple: '#893D88',
      taupe: '#CAC1B8',
      white: '#FFFFFF',
      red: '#D23C47',
    },
    backgroundImage: {
      gold: 'linear-gradient(180deg, #F3B121 0%, rgba(255, 203, 90, 0.567708) 53.65%, #FFC954 100%)'
    },
    extend: {},
  },
  plugins: [],
}
