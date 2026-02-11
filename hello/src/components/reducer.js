import React, { useReducer } from 'react'

const initialState = 0

function reducer(state, action) {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state
    }
}

function Counternew() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch("increment")}>+</button>
            <button onClick={() => dispatch("decrement")}>-</button>
        </div>
    )
}

export default Counternew
