// src/components/EmojiCheckinWidget.tsx

import React from "react";
import EmojiContainer from "./baseline-ui/EmojiContainer";
import EmojiOptionCard from "./baseline-ui/EmojiOptionCard";
import { emojiCheckinData } from "../data/emojiData";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { setEmoji, resetEmoji } from "../redux/slices/checkinSlice";

const EmojiCheckinWidget: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedId = useSelector(
    (state: RootState) => state.checkin.selectedEmojiId
  );

  const handleSelect = (id: number) => {
    dispatch(setEmoji(id));
  };

  const handleContinue = () => {
    if (selectedId !== null) {
      const selected = emojiCheckinData.options.find(
        (e) => e.id === selectedId
      );
      alert(`Thanks for checking in! You feel "${selected?.label}".`);
      dispatch(resetEmoji());
    }
  };

  const handleBack = () => {
    alert("Back button clicked");
  };

  const handleClose = () => {
    alert("Close button clicked");
  };

  return (
    <EmojiContainer
      heading="Wellbeing Check-in"
      onBack={handleBack}
      onClose={handleClose}
      onContinue={handleContinue}
      continueDisabled={selectedId === null}
      showContinueButton
    >
      <div className="flex flex-col items-center">
        <p className="text-[17px] font-semibold text-gray-700 text-center leading-normal mb-6">
          {emojiCheckinData.question}
        </p>

        <div className="flex justify-center gap-[6px] flex-wrap mt-6">
          {emojiCheckinData.options.map((emoji) => (
            <EmojiOptionCard
              key={emoji.id}
              emoji={emoji}
              isSelected={selectedId === emoji.id}
              onSelect={() => handleSelect(emoji.id)}
            />
          ))}
        </div>
      </div>
    </EmojiContainer>
  );
};

export default EmojiCheckinWidget;
