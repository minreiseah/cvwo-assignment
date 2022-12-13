import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pizzaReducer from './pizzaSlice' 
import userProfileReducer from './userProfile/userProfileSlice'
import forumReducer from './forum/forumSlice'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    userProfile: userProfileReducer,
    forum: forumReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
