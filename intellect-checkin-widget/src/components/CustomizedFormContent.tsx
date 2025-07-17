import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { emojiCheckinData } from "../data/emojiData";

const CustomizedFormContent: React.FC = () => {
  const selectedId = useSelector((state: RootState) => state.checkin.selectedEmojiId);
  const selectedEmoji = emojiCheckinData.options.find((e) => e.id === selectedId);

  if (!selectedEmoji) return null;

  return (
    <div className="text-center">
      <p className="text-lg text-gray-700 mb-2">You’re feeling:</p>
      <img src={selectedEmoji.iconPath} alt={selectedEmoji.label} className="w-14 h-14 mx-auto mb-2" />
      <p className="text-xl font-semibold text-blue-500">{selectedEmoji.label}</p>

      <div className="mt-4 text-sm text-gray-500">
        <p>This is a demonstration of dynamic rendering from Redux state.</p>
        <p>Your selected mood emoji and label come from the global state!</p>
      </div>
    </div>
  );
};

export default CustomizedFormContent;
