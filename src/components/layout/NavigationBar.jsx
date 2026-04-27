import { memo, useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@ui/Button"

export const NavigationBar = memo(function Navbar(props) {
  const { logo, links = [], onLinkClick, className = "", ...navigationbar } = props

  const [ open, setOpen ] = useState(false)

    return (
      <nav
        { ...navigationbar }
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b ${ className }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center">
            {typeof logo === "string" ? (
              <span className="text-lg font-semibold">{ logo }</span>
            ) : (
              logo
            )}
          </div>
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <button
                key={ index }
                onClick={() => onLinkClick?.(link)}
                className="text-gray-600 hover:text-black transition"
              >
                { link.label }
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/log-in">
              <Button label="LogIn" />
            </Link>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            { open ? "✕" : "☰" }
          </button>
        </div>

        { open && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 border-t bg-white">
            {links.map((link, index) => (
              <button
                key={ index }
                onClick={() => {
                  onLinkClick?.(link)
                  setOpen(false)
                }}
                className="text-left text-gray-600 hover:text-black"
              >
                { link.label }
              </button>
            ))}

            <Link to="/log-in">
              <Button 
                label="LogIn" 
                className="w-full" 
              />
            </Link>
          </div>
        )}
      </nav>
    )
  }
)