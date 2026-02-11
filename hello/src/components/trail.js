import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value }
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value }
        default:
            return state
    }
}

function Trail() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{count.firstCounter}</h2>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>+</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>-</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>-5</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>+5</button>
        </div>
    )
}

export default Trail
