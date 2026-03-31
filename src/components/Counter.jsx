import { Fragment, useCallback, useState } from 'react'

export function Counter() {
    const [ count, setCount ] = useState(0)
    
    const increment = useCallback(() => {
        setCount(count => count + 1)
    }, [ setCount ])

    const decrement = useCallback(() => {
        setCount(count => count - 1)
    }, [ setCount ])

    return (
        <Fragment>
            <h1>Counter</h1>
            <section id="center">
                <h2>Count is : { count }</h2>
                <button
                    className="counter"
                    onClick={ increment }
                >
                    Increment
                </button>
                <button
                    className="counter"
                    onClick={ decrement }
                >
                  Decrement
                </button>
            </section>
        </Fragment>
    )
}
