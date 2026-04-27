import { memo } from "react"

export const Input = memo(function Input(props) {
  const { label, type, placeholder, className = "", ...input } = props
    return (
      <div className="flex flex-col gap-1 w-full">
        { label && (
          <label className="p-1 text-sm font-medium text-gray-700">
            { label }
          </label>
        )}
        <input
          { ...input }
          type={ type }
          placeholder={ placeholder }
          className={`px-4 py-2 rounded-xl border outline-none transition ${ className }`}
        />
      </div>
    )
  }
)