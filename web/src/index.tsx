import React from 'react';
import { createRoot } from 'react-dom/client';

// redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// react-router
import { BrowserRouter } from 'react-router-dom';

// Chakra UI
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/400.css'
import '@fontsource/metropolis/700.css'

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Extending Chakra UI theme to include custom colours, fonts
const theme = extendTheme({ 
  colors: {
    primary: {
      1: '#5EB2A5', // teal
      2: '#F8C6D2' // pink
    },
    secondary: {
      1: '#DFF2F8', // cyan
      2: '$4B8E9A', // malachite
    }
  },

  fonts: {
    heading: `'Metropolis', sans-serif`,
    body: `'Inter', sans-serif`,
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
