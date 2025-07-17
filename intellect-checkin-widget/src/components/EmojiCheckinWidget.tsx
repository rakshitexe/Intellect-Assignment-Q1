import React, { useState, useEffect } from "react";
import EmojiContainer from "./baseline-ui/EmojiContainer";
import EmojiOptionCard from "./baseline-ui/EmojiOptionCard";
import { emojiCheckinData } from "../data/emojiData";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { setEmoji, resetEmoji } from "../redux/slices/checkinSlice";
import { GreetingStep } from "./baseline-ui/Greeting";
import CustomizedFormContent from "./CustomizedFormContent";

interface EmojiCheckinWidgetProps {
  onClose: () => void;
}

const EmojiCheckinWidget: React.FC<EmojiCheckinWidgetProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedId = useSelector((state: RootState) => state.checkin.selectedEmojiId);

  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<"greeting" | "select" | "summary">("greeting");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (id: number) => {
    dispatch(setEmoji(id));
  };

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

  const handleBack = () => {
    if (step === "summary") setStep("select");
    else if (step === "select") setStep("greeting");
  };

  const handleClose = () => {
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
