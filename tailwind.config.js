/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
        neue: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'primary-black': {
          900: '#020202',
          800: '#040404',
          700: '#050505',
          600: '#060606',
          500: '#070707',
          400: '#323232',
          300: '#5a5a5a',
          200: '#838383',
          100: '#acacac',
          50: '#cdcdcd',
        },
        grey: {
          900: '#2f3031',
          800: '#47484a',
          700: '#5f5f63',
          600: '#76777b',
          500: '#8e8f94',
          400: '#a1a2a6',
          300: '#b4b4b8',
          200: '#f5f5f5',
          100: '#e4e4e4',
          50: '#ffffff',
        },
        green: {
          900: '#114824',
          800: '#1a6c36',
          700: '#238f47',
          600: '#2bb359',
          500: '#34d76b',
          400: '#56de84',
          300: '#78e49c',
          200: '#99ebb5',
          100: '#bbf2ce',
          50: '#d6f7e1',
        },

        red: {
          900: '#551313',
          800: '#7f1d1d',
          700: '#aa2626',
          600: '#d43030',
          500: '#ff3939',
          400: '#ff5a5a',
          300: '#ff7b7b',
          200: '#ff9c9c',
          100: '#ffbdbd',
          50: '#fff8f8',
        },
        yellow: {
          900: '#30240c',
          800: '#513c14',
          700: '#a17828',
          600: '#ca9632',
          500: '#f2b43c',
          400: '#f4c05d',
          300: '#f6cd7d',
          200: '#f8d99d',
          100: '#fbe6be',
          50: '#fcf0d8',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
