module.exports = {
  important: true,
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        pink: '#F16783',
        'semi-75': 'rgba(0, 0, 0, 0.75)',
        'dark-pink': '#E3506E',
        'light-blue': '#ECF6FB',
        'primary-text': '#242424',
        'secondary-text': '#626470',
        'footer-color-text': '#AFB4BB',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
    backgroundColors: ['odd']
  },
};
