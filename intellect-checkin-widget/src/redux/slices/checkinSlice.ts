import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CheckinState {
  selectedEmojiId: number | null
}

const initialState: CheckinState = {
  selectedEmojiId: null,
}

const checkinSlice = createSlice({
  name: 'checkin',
  initialState,
  reducers: {
    setEmoji: (state, action: PayloadAction<number>) => {
      state.selectedEmojiId = action.payload
    },
    resetEmoji: (state) => {
      state.selectedEmojiId = null
    },
  },
})

export const { setEmoji, resetEmoji } = checkinSlice.actions
export default checkinSlice.reducer
