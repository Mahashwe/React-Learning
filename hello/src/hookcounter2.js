import React, { useState } from 'react'

function Hookcounter2() {
    const initalvalue = 0
    const [Count, setCount] = useState(initalvalue)

    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <button onClick={() => setCount(initalvalue)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
            <h1>{Count}</h1>
        </div>
    )
}

export default Hookcounter2