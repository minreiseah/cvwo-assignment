import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './App';
import MasterProvider from './providers/MasterProvider';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MasterProvider>
      <App />
    </MasterProvider>
  </React.StrictMode>
);
