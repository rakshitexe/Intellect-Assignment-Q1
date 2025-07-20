// src/components/baseline-ui/EmojiOptionCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { EmojiOption } from '../../data/emojiData';

interface Props {
  emoji: EmojiOption;
  isSelected: boolean;
  onSelect: () => void;
}

const EmojiOptionCard: React.FC<Props> = ({ emoji, isSelected, onSelect, ...rest }) => (
  <motion.button
    onClick={onSelect}
    {...rest}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'tween', duration: 0.001}} 
    className={`
      w-[90px] h-[130px] sm:w-[100px] sm:h-[130px]
      flex flex-col items-center justify-center
      rounded-[20px] border transition
      ${isSelected
        ? 'bg-[#1c8bf225] border-[#1c8cf2] font-semibold '
        : 'bg-white border-gray-300 hover:border-gray-400 font-medium hover:scale-100'
      }
    `}
  >
    <img
      src={emoji.iconPath}
      alt={emoji.label}
      className="w-15 h-15 mb-2 object-contain"
    />
    <span className="text-xs text-gray-700 mt-2">
      {emoji.label}
    </span>
  </motion.button>
);

export default EmojiOptionCard;
