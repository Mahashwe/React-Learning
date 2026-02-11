import React, { useEffect } from 'react'

function Focus() {
    useEffect(() => {
        inputref.current.focus()
    }, [])

    const inputref = React.createRef(null)
    return (
        <div>
            <input type="text" ref={inputref} />
        </div>
    )
}

export default Focus
