// #1 simple mapping 
// import React from 'react'

// export default function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana']
//     return (
//         <div>{
//             names.map(name => <h2>{name}</h2>)
//         }</div>
//     )
// }


// #2 mapping without a key 
// import React from 'react'

// export default function namelist() {

//     const data = [
//         {
//             id: 1,
//             name: 'Bruce',
//             age: 30
//         },
//         {
//             id: 2,
//             name: 'Clark',
//             age: 25
//         },
//         {
//             id: 3,
//             name: 'Diana',
//             age: 28
//         }
//     ]
//     const final = data.map(data => <h2> {data.name} is {data.age} years old</h2>)
//     return (
//         <div>
//             {final}
//         </div>
//     )
// }

// sending the data via props to child component, where it applies the function and returns the value
import React from 'react'
import Child from './child'

export default function NameList() {

    const data = [
        {
            id: 1,
            name: 'Bruce',
            age: 30
        },
        {
            id: 2,
            name: 'Clark',
            age: 25
        },
        {
            id: 3,
            name: 'Diana',
            age: 28
        }
    ]

    return (
        <div>
            {data.map(item => <Child key={item.id} data={item} />)}
        </div>
    )
}