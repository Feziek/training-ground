import { memo } from "react"

import { Input } from "@ui/Input"
import { Button } from "@ui/Button"

export const SearchBar = memo(function SearchBar(props) {
  const { placeholder, className = "", ...searchbar } = props
    return (
      <form
        { ...searchbar }
        className={`flex items-center gap-2 ${ className }`}
      >
        <Input
          type="text"
          placeholder={ placeholder }
        />
        <Button
          type="submit"
          label="Search"
        />
      </form>
    )
  }
)