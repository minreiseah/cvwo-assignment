import { createSlice } from '@reduxjs/toolkit'
import { User } from '@auth0/auth0-spa-js';


interface UserProfile {
  isAuthenticated: boolean,
  user: User | null
}

const initialState: UserProfile = {
  isAuthenticated: false,
  user: null,
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
      state.user = action.payload || null;
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
