import { render, screen } from '@testing-library/react';

// redux
import { Provider } from 'react-redux';
import { store } from '../app/store';

// router
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('Forum Home Page', () => {
  // it('renders hello world', () => {
  //   render(<Provider store={store}><App /></Provider>, {wrapper: BrowserRouter})
  //
  //   expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
  // })

  it.todo('should render forum title')

  it.todo('should view all recent threads')

  it.todo('should view all top threads')

  // it.todo('should filter threads by category')

  // it.todo('should search for specific discussions or keywords')
})

describe('Threads', () => {
  it.todo('only member should create new thread')

  it.todo('should be able to view thread')

  it.todo('should edit thread')

  it.todo('should delete thread')
})

describe('Replies (Posts)', () => {
  it.todo('should be able to reply to thread')

  it.todo('should edit reply')

  it.todo('should delete reply')
})

// describe('Social Features', () => {
//   it.todo('should upvote and downvote')
//
//   it.todo('should be able to view profile')
//
//   it.todo('should customize profile')
//
//   it.todo('should view user profile')
// })
//
// describe('Moderation', () => {
//   it.todo('should delete thread')
//
//   it.todo('should edit thread')
//
//   it.todo('should delete comment')
//
//   it.todo('should edit comment')
// })


