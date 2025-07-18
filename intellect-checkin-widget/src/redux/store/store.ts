import { configureStore } from '@reduxjs/toolkit'
import checkinReducer from '../slices/checkinSlice'

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    // Register the check-in slice reducer
    checkin: checkinReducer,
  },
})

// Type definitions for use throughout the app
export type RootState = ReturnType<typeof store.getState> // Represents the entire Redux state
export type AppDispatch = typeof store.dispatch           // Represents the dispatch function type
