import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pizzaReducer from './pizzaSlice'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
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
