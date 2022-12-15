import { createSlice } from '@reduxjs/toolkit'
import { User } from '@auth0/auth0-spa-js';


interface UserProfile {
  isAuthenticated: boolean,
  token: any,
  user?: User 
}

const initialState: UserProfile = {
  isAuthenticated: false,
  token: null,
  user: undefined,
}

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    /**
     * Writes Auth0 user state into Redux store on user login
     */
    onUserLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user || undefined;
      state.token = action.payload.token
    },

    /**
     * Clears Auth0 user state from Redux store on user logout
     */
    onUserLogout: (state) => {
      state = initialState;
    },
  }
})

export const { onUserLogin, onUserLogout } = userProfileSlice.actions

export default userProfileSlice.reducer
