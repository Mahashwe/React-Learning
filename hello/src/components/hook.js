import { use, useEffect } from 'react'
import React, { useState } from 'react'

function Hook() {
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div><button onClick={() => setCount(count + 1)}>Count {count}</button></div>
    )
}

export default Hook
