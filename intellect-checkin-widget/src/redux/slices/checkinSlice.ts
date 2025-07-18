import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the shape of the check-in state
interface CheckinState {
  selectedEmojiId: number | null // Stores the selected emoji ID
}

// Initial state
const initialState: CheckinState = {
  selectedEmojiId: null,
}

// Create the check-in slice
const checkinSlice = createSlice({
  name: 'checkin',
  initialState,
  reducers: {
    // Set selected emoji ID
    setEmoji: (state, action: PayloadAction<number>) => {
      state.selectedEmojiId = action.payload
    },
    // Reset emoji selection
    resetEmoji: (state) => {
      state.selectedEmojiId = null
    },
  },
})

// Export actions and reducer
export const { setEmoji, resetEmoji } = checkinSlice.actions
export default checkinSlice.reducer
