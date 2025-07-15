// src/components/baseline-ui/EmojiOptionCard.tsx
import React from 'react'
import type { EmojiOption } from '../../data/emojiData'

interface Props {
  emoji: EmojiOption
  isSelected: boolean
  onSelect: () => void
}

const EmojiOptionCard: React.FC<Props> = ({ emoji, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`
      w-[90px] h-[130px] sm:w-[100px] sm:h-[130px]
      flex flex-col items-center justify-center
      rounded-[20px] border transition
      ${isSelected
        ? 'bg-blue-100 border-blue-500'
        : 'bg-white border-gray-300 hover:border-gray-400'
      }
    `}
  >
    <img src={emoji.iconPath} alt={emoji.label} className="w-15 h-15 mb-2 object-contain" />
    <span className="text-xs text-gray-700 mt-2">{emoji.label}</span>
  </button>
)

export default EmojiOptionCard