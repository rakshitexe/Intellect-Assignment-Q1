import React from 'react'
import { emojiOptions } from '../data/emojiData'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store/store'
import { setEmoji } from '../redux/slices/checkinSlice'

const EmojiCheckinWidget: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedId = useSelector((state: RootState) => state.checkin.selectedEmojiId)

  const handleSelect = (id: number) => {
    dispatch(setEmoji(id))
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-center">How are you feeling today?</h2>
      <p className="text-gray-500 mb-6 text-center">Select the option that best describes your mood.</p>

      <div className="flex justify-between flex-wrap gap-4 mb-6">
        {emojiOptions.map((emoji) => (
          <button
            key={emoji.id}
            onClick={() => handleSelect(emoji.id)}
            className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all border-2 
              ${selectedId === emoji.id ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-transparent hover:border-gray-300'}`}
          >
            <span className="text-3xl mb-1">{emoji.icon}</span>
            <span className="text-sm text-gray-700">{emoji.label}</span>
          </button>
        ))}
      </div>

      <button
        disabled={selectedId === null}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  )
}

export default EmojiCheckinWidget
