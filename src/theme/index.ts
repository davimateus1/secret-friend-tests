import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#4B69FD',
    800: '#FE652B',
    700: '#FFF9EB',
    600: '#C4C4C4',
    500: '#F8D7DA',
    400: '#F5C2C7',
    300: '#842029',
  },
  rgba: {
    black: 'rgba(0, 0, 0, 0.7)',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
};

const fonts = {
  heading: `'Poppins', 'sans-serif'`,
  body: `'Poppins', 'sans-serif'`,
};

export const ScrollbarStyle = {
  '::-webkit-scrollbar': {
    width: '0.3rem',
    height: '0.6rem',
    marginLeft: '3rem',
  },
  '::-webkit-scrollbar-track': {
    border: 'solid 1px brand.700',
    borderRadius: '2.4rem',
  },
  '::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px brand.400',
    background: 'brand.800',
    borderRadius: '2.4rem',
  },
};

export const theme = extendTheme({ colors, fonts });
