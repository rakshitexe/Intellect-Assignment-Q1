import React from "react";
import ContinueButton from "./NextButton";
import BackIcon from "../../assets/icons/LeftArrow.svg"
interface EmojiContainerProps {
  heading: string;
  onBack?: () => void;
  onClose?: () => void;
  onContinue?: () => void;
  continueDisabled?: boolean;
  continueLabel?: string;
  showContinueButton?: boolean;
  children: React.ReactNode;
}

const EmojiContainer: React.FC<EmojiContainerProps> = ({
  heading,
  onBack,
  onClose,
  onContinue,
  continueDisabled = false,
  continueLabel = "Continue",
  showContinueButton = false,
  children,
}) => {
  return (
    <div
      className="
        w-[90vw]              // Takes 90% width on very small screens
        max-w-[820px]         // Never exceeds 820px
        min-h-[80vh]
        max-h-[95vh]
        overflow-y-auto
        p-6
        bg-white
        rounded-[10px]
        shadow-xl
        border border-gray-200
        flex flex-col justify-between
        mx-auto               // Centers horizontally on all screen sizes
        relative
      "
    >
      {/* Corner buttons */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-2 left-4 text-gray-400 hover:text-gray-600 text-sm"
        >
           <img src={BackIcon} alt="Back" className="w-full h-full" />
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          ✕
        </button>
      )}

      {/* Heading */}
      <div className="mb-4 text-center">
        <h2 className="text-[26px] sm:text-[28px] font-semibold text-gray-800">
          {heading}
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center">
        {children}
      </div>

      {/* Continue Button */}
      {showContinueButton && (
        <div className="mt-4">
          <ContinueButton
            onClick={onContinue}
            disabled={continueDisabled}
            label={continueLabel}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiContainer;
