import { Fragment, useCallback, useState } from "react"

import { Counter, Button, Card, Input } from "@components"

export function Tools() {
  const [ name, setName ] = useState("")

  const handleNameChange = useCallback((event) => {
    setName(event.target.value)
  }, [])
  
  const handleSubmit = useCallback(() => {
    alert(`Hello, ${ name }`)
  }, [ name ])

  return (
    <Fragment>
      <Counter />
      <div className="p-6 max-w-md mx-auto">
        <Card title="Enter Details">
          <Input
            label="Name"
            value={ name }
            onChange={ handleNameChange }
            placeholder="Enter your name"
          />
          <Button 
            label="Submit" 
            className="mt-5 m-auto"
            onClick={ handleSubmit }
            isDisabled={ !name }
          />
        </Card>
      </div>
    </Fragment>
  ) 
}