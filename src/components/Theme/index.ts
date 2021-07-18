import { createTheme, createText, createBox } from '@shopify/restyle';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const theme = createTheme({
  colors: {
    primary: '#F5B04C',
    secondary: '#155157',
    white: '#FFFFFF',
    dark: '#1A1A1A',
    text: '#8D909E',
    yellow: '#FDCA00',
    red: '#F44336',
    green: '#4CD964',
    light: '#E6E9EF',
  },
  constants: {
    screenPadding: 40,
    screenWidth: width - 40,
  },
  spacing: {
    none: 0,
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 30,
    xxxl: 40,
  },
  borderRadii: {
    none: 0,
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  textVariants: {
    button: {
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      color: 'white',
    },
    h1: {
      fontSize: 26,
      fontFamily: 'Montserrat-Bold',
      color: 'secondary',
    },
    b1: {
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      color: 'text',
      lineHeight: 'auto',
    },
    b2: {
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      color: 'text',
      lineHeight: 24,
      letterSpacing: 0.17,
    },
    b2m: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: 'text',
      lineHeight: 24,
      letterSpacing: 0.17,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const Text = createText<Theme>();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const Box = createBox<Theme>();
export default theme;
