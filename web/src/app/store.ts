import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pizzaReducer from './slices/pizzaSlice'
import userProfileReducer from './slices/userProfileSlice'
import forumReducer from './slices/forumSlice'

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
