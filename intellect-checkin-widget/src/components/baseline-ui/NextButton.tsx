import React from 'react'

interface Props {
  onClick?: () => void
  disabled?: boolean
  label?: string
}

const ContinueButton: React.FC<Props> = ({
  onClick,
  disabled = false,
  label = 'Continue',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-2 sm:py-3 px-4
        text-white text-lg font-medium
        rounded-lg
        transition-colors
        ${disabled
          ? 'bg-[#96a5be] cursor-not-allowed'
          : 'bg-[#1c8cf2] hover:bg-[#0c7ee9] cursor-pointer'
        }
      `}
    >
      {label}
    </button>
  )
}

export default ContinueButton