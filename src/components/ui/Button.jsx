import { memo } from "react"

export const Button = memo(function Button(props) {
  const { label, className = "", isDisabled = false, ...button } = props
    return (
      <button
        { ...button }
        type="button"
        disabled={ isDisabled }
        className={`
          h-10 px-5 py-6 rounded-full flex items-center justify-center text-white transition
          ${ isDisabled 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-gray-600 hover:bg-gray-500 active:scale-95 cursor-pointer"
          }
          ${ className }
        `}
      >
        { label }
      </button>
    )
  }
)