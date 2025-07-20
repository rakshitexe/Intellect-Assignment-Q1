import React, { useState, useEffect } from "react";
import EmojiContainer from "./baseline-ui/EmojiContainer";
import EmojiOptionCard from "./baseline-ui/EmojiOptionCard";
import { emojiCheckinData } from "../data/emojiData";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { setEmoji, resetEmoji } from "../redux/slices/checkinSlice";
import { GreetingStep } from "./baseline-ui/Greeting";
import CustomizedFormContent from "./CustomizedFormContent";

// Props to allow parent component to close the widget
interface EmojiCheckinWidgetProps {
  onClose: () => void;
}

const EmojiCheckinWidget: React.FC<EmojiCheckinWidgetProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedId = useSelector(
    (state: RootState) => state.checkin.selectedEmojiId
  );

  // Local component state
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<"greeting" | "select" | "summary">(
    "greeting"
  );

  // Add fade-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle emoji selection
  const handleSelect = (id: number) => {
    if (selectedId === id) {
      dispatch(resetEmoji()); // Deselect if same emoji is clicked
    } else {
      dispatch(setEmoji(id)); // Select new emoji
    }
  };
  // Move forward in steps
  const handleContinue = () => {
    if (step === "greeting") {
      setStep("select");
    } else if (step === "select" && selectedId !== null) {
      setStep("summary");
    } else if (step === "summary") {
      dispatch(resetEmoji());
      handleClose();
    }
  };

  // Move backward in steps
  const handleBack = () => {
    if (step === "summary") setStep("select");
    else if (step === "select") setStep("greeting");
  };

  // Close the widget with fade-out effect
  const handleClose = () => {
    dispatch(resetEmoji());
    setIsVisible(false);
    setTimeout(() => onClose(), 500);
  };

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <EmojiContainer
        heading="Wellbeing Check-in"
        onBack={step === "greeting" ? undefined : handleBack}
        onClose={handleClose}
        onContinue={handleContinue}
        continueDisabled={step === "select" && selectedId === null}
        continueLabel={step === "summary" ? "Finish" : "Continue"}
        showContinueButton
      >
        {step === "greeting" && <GreetingStep />}

        {step === "select" && (
          <div className="flex flex-col items-center">
            <p className="text-[17px] font-semibold text-gray-700 text-center leading-normal mb-6">
              {emojiCheckinData.question}
            </p>

            <div className="flex justify-center gap-[6px] flex-wrap mt-6">
              {emojiCheckinData.options.map((emoji) => (
                <EmojiOptionCard
                  data-testid={`emoji-option-${emoji.id}`}
                  key={emoji.id}
                  emoji={emoji}
                  isSelected={selectedId === emoji.id}
                  onSelect={() => handleSelect(emoji.id)}
                />
              ))}
            </div>
          </div>
        )}

        {step === "summary" && <CustomizedFormContent />}
      </EmojiContainer>
    </div>
  );
};

export default EmojiCheckinWidget;
