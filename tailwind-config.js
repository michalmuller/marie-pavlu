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
        cyan: '#c9c9c9',
        'primary-text': '#242424',
        'secondary-text': '#626470',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
