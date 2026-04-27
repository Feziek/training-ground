import { useState, useCallback, useEffect } from "react"

import { Button } from "@ui/Button"
import { Card } from "@ui/Card"

export function Counter() {
  const [ count, setCount ] = useState(0)
  const [ other, setOther ] = useState(0)

  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])

  const increaseOther = useCallback(() => {
    setOther(other => other + 5)
  }, [])

  useEffect(() => {
    console.log(`This count is: ${ count }`)
  }, [ count ])

  return (
    <div className="flex justify-center p-6 mt-20">
      <Card className="text-center min-w-[250px]">
        <h2 className="mb-4 font-mono text-3xl font-semibold text-gray-800">
          Count: { count }
        </h2>
        <h3 className="text-lg text-gray-500">
          Other: <span className="font-medium text-gray-700">{ other }</span>
        </h3>
        <div className="flex justify-center gap-4 mt-4">
          <Button label="+" onClick={ increment } />
          <Button label="-" onClick={ decrement } />
        </div>
        <Button
          label="Change other state"
          onClick={ increaseOther }
          className="mt-4"
        />
      </Card>
    </div>
  )
}