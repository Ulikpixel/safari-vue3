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
      'grey-text': '#686868',
      'clear-text': '#C4C4C4',
      disabled: '#bfbcb4',
      'pink-disabled': '#eb5286',
    },
    backgroundImage: {
      gold: 'linear-gradient(180deg, #F3B121 0%, rgba(255, 203, 90, 0.567708) 53.65%, #FFC954 100%)'
    },
    boxShadow: {
      'input-error': '2px -1px 7px 5px rgba(237,22,95,0.21)',
      'card': '0px 0px 54px -23px rgba(0,0,0,0.7)',
    },
    maxWidth: {
      'small-container': '1066px',
    },
    borderColor: {
      grey: '#C4C4C4',
      pink: '#ED165F',
    },
    container: {
      padding: '20px',
      center: true,
      screens: {
        lg: '1390px'
      },
    },
    extend: {
      boxShadow: {
        'basket-card': '0px 0px 5px 1px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
