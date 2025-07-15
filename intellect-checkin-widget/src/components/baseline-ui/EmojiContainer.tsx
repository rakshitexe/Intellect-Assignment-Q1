import React from "react"
import ContinueButton from "./NextButton"

interface EmojiContainerProps {
  heading: string
  onBack?: () => void
  onClose?: () => void
  onContinue?: () => void
  continueDisabled?: boolean
  continueLabel?: string
  showContinueButton?: boolean
  children: React.ReactNode
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
        w-full
        sm:w-[820px]
        h-[80vh]
        sm:h-auto
        sm:aspect-[5/4]
        max-h-[90vh]
        overflow-y-auto
        p-6
        bg-white
        rounded-[10px]
        shadow-xl
        border border-gray-200
        flex flex-col justify-between
        relative
      "
    >
      {/* Corner buttons (absolute position inside container) */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-2 left-4 text-gray-400 hover:text-gray-600 text-xm"
        >
          ←
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-xm"
        >
          ✕
        </button>
      )}

      {/* Heading */}
      <div className=" mb-4 text-center">
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
  )
}

export default EmojiContainer
