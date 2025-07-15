import { configureStore } from '@reduxjs/toolkit'
import checkinReducer from '../slices/checkinSlice'

export const store = configureStore({
  reducer: {
    checkin: checkinReducer,
  },
})

// Types for use in components
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch