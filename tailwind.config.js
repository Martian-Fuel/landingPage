module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA21FE',
        'primary-gradient':
          'linear-gradient(180deg, rgba(46, 17, 88, 1) 13.89%, rgba(0, 0, 0, 1) 130%, rgba(228, 35, 255, 1) 14.65%',
        'light-grey': '#2D333D',
      },
    },
  },
  plugins: [],
};
