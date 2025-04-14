import React from 'react';
// import Snowfall from 'react-snowfall'
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';

import TagManager from 'react-gtm-module';


const tagManagerArgs = {
  gtmId: 'GTM-5DTGCGHZ'
}

ReactDOM.render(
  <React.StrictMode >
    <ColorModeScript initialColorMode='light' />
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
TagManager.initialize(tagManagerArgs);

