import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
