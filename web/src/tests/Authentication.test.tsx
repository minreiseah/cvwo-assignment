import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@auth0/auth0-react';
import { Auth0ContextInterface } from '@auth0/auth0-react';

// import App from '../App';
import Nav from '../components/Layout/Nav';


jest.mock("@auth0/auth0-react")
const mockedUseAuth0 = jest.mocked(useAuth0, true);

const mockUser = {
   email: "johndoe@example.com",
   sub: "google-oauth2|12345678901234",
}

const mockLoggedOut: Auth0ContextInterface<User> = {
      error: Error(""),
      isAuthenticated: false,
      isLoading: true,
      user: mockUser,
      getAccessTokenSilently: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithRedirect: jest.fn(),
      loginWithPopup: jest.fn(),
      logout: jest.fn(),
      buildAuthorizeUrl: jest.fn(),
      buildLogoutUrl: jest.fn(),
      handleRedirectCallback: jest.fn(),
}

const mockLoggedIn = Object.assign({}, mockLoggedOut, { isAuthenticated: true })


describe('Nav Component Tests - Logged Out', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue(mockLoggedOut)
  })

  it("Log In button displays when logged out", () => {
    render(<Nav />, {wrapper: BrowserRouter});

    expect(screen.getByText(/Log In/)).toBeInTheDocument();
  })

  it("Sign Up button displays when logged out", () => {
    render(<Nav />, {wrapper: BrowserRouter});

    expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  })

})

describe('Nav Component Tests - Logged In', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue(mockLoggedIn)
  })

  it("Log Out button displays when logged in", () => {
    render (<Nav />,{wrapper: BrowserRouter});

    expect(screen.getByText(/Log Out/)).toBeInTheDocument();
  })

})
