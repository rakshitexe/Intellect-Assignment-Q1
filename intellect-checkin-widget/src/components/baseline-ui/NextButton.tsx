import React from 'react'

// Define props for the button component
interface Props {
  onClick?: () => void            // Optional click handler
  disabled?: boolean              // Optional disabled state
  label?: string                  // Optional label text (default: 'Continue')
}

// Functional button component
const ContinueButton: React.FC<Props> = ({
  onClick,
  disabled = false,
  label = 'Continue',
}) => {
  return (
    <button
      // Call the passed onClick handler when clicked
      onClick={onClick}

      // Disable the button if `disabled` is true
      disabled={disabled}

      // Apply styling based on whether the button is disabled
      className={`
        w-full py-2 sm:py-3 px-4                  
        text-white text-lg font-medium             
        rounded-lg                                 
        transition-colors                           
        ${disabled
          ? 'bg-[#96a5be] cursor-not-allowed'       // Greyed out and non-clickable when disabled
          : 'bg-[#1c8cf2] hover:bg-[#0c7ee9] cursor-pointer'  // Blue with hover effect when enabled
        }
      `}
    >
      {/* Display the label text */}
      {label}
    </button>
  )
}

export default ContinueButton
