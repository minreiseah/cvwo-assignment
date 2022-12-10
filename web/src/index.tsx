import React from 'react';
import { createRoot } from 'react-dom/client';

// redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// react-router
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
