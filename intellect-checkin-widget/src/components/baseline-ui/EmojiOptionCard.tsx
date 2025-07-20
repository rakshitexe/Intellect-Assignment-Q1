// src/components/baseline-ui/EmojiOptionCard.tsx

import React from 'react';
import type { EmojiOption } from '../../data/emojiData';

// Props definition for EmojiOptionCard
interface Props {
  emoji: EmojiOption;     // Emoji object containing icon path and label
  isSelected: boolean;    // Whether this emoji is currently selected
  onSelect: () => void;   // Callback when user clicks/selects the emoji
}

// A card component to display an individual emoji option
const EmojiOptionCard: React.FC<Props> = ({ emoji, isSelected, onSelect, ...rest }) => (
  <button
    onClick={onSelect} // Trigger selection when clicked
   {...rest}
    className={`
      w-[90px] h-[130px] sm:w-[100px] sm:h-[130px]
      flex flex-col items-center justify-center
      rounded-[20px] border transition
      ${isSelected
        ? 'bg-[#1c8bf225] border-[#1c8cf2] font-semibold'  // Highlight if selected
        : 'bg-white border-gray-300 hover:border-gray-400 font-medium' // Neutral style
      }
    `}
  >
    {/* Emoji Icon */}
    <img
      src={emoji.iconPath}
      alt={emoji.label}
      className="w-15 h-15 mb-2 object-contain"
    />

    {/* Emoji Label */}
    <span className="text-xs text-gray-700 mt-2">
      {emoji.label}
    </span>
  </button>
);

export default EmojiOptionCard;
