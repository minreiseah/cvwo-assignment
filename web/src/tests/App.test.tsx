import { render, screen, fireEvent } from '@testing-library/react';
import TestWrapper from "./TestWrapper"
import { useAppSelector } from '../app/hooks';

import App from '../App';
import Forum from '../routes/Forum';
import { store } from '../app/store';

describe('Forum Home Page', () => {
  it('Should render forum title', () => {
    render(<Forum />, { wrapper: TestWrapper });

    expect(screen.getByText(/Posts/)).toBeInTheDocument();
  })

  it('Should view all recent threads on page initialisation', () => {
    render(<Forum />, { wrapper: TestWrapper });

    // Get threads sorted state
    const initialState = store.getState().forum.sortedBy;

    expect(initialState).toEqual('recent')

  })

  it.todo('View all recent threads on tab change')

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


