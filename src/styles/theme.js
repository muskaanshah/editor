import {
  theme as base,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';

// const config = {
//   useSystemColorMode: false,
//   initialColorMode: 'light',
// };

const colors = {
  gray: {
    900: '#0c0c0d',
    850: '#151516',
    800: '#393A3C',
    700: '#555658',
    600: '#707173',
    500: '#8C8D8E',
    400: '#A7A8A9',
    300: '#C2C3C5',
    200: '#A7A8A9',
    150: '#ECECEC',
    100: '#fdfdfd',
  },
};

const fonts = {
  heading: `Roboto, ${base.fonts?.heading}`,
  body: `Roboto, ${base.fonts?.body}`,
};

export const components = {
  Button: {
    baseStyle: {
      _focus: {
        border: 'none',
      },
    },
  },
};

// const styles = {
//   global: props => ({
//     'html, body': {
//       bg: props.colorMode === 'light' ? 'gray.900' : 'gray.100',
//       color: props.colorMode === 'light' ? 'gray.100' : 'gray.900',
//     },
//   }),
// };

export const theme = extendTheme(
  {
    colors,
    fonts,
    // config,
    // styles,
    components,
  },
  withDefaultColorScheme({
    colorScheme: 'red',
    components: ['Tabs'],
  })
);
