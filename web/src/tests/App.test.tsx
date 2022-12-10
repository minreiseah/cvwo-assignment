import { render, screen } from '@testing-library/react';

// redux
import { Provider } from 'react-redux';
import { store } from '../app/store';

// router
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

test('Renders hello world', () => {
  render(<Provider store={store}><App /></Provider>, {wrapper: BrowserRouter})

  expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
});
