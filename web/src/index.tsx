import React from 'react';
import { createRoot } from 'react-dom/client';

// redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// react-router
import { BrowserRouter } from 'react-router-dom';

// providers
import Auth0ProviderWithHistory from './providers/Auth0ProviderWithHistory';
import ChakraThemedProvider from './providers/ChakraThemedProvider';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraThemedProvider>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </ChakraThemedProvider>
    </Provider>
  </React.StrictMode>
);
