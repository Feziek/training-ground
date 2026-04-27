import { memo } from "react";

export const Card = memo(function Card(props) {
  const { children, className = "", title }  = props
    return (
      <div
        className={`
        bg-white shadow-md rounded-2xl p-20 border border-gray-200 
          ${ className }
        `}
      >
        { title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{ title }</h2>
        )}
        <div className="text-gray-600">{ children }</div>
      </div>
    )
  } 
)