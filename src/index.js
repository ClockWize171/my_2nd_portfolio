import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from'./theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';


ReactDOM.render(
  <React.StrictMode >
    <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


