import React from 'react'

export default function Child({ data }) {
    return (
        <div>
            <h2>{data.name} is {data.age} years old</h2>
        </div>
    )
}
