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
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-blue-400 hover:bg-blue-500'
        }
      `}
    >
      {label}
    </button>
  )
}

export default ContinueButton