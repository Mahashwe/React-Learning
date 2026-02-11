import React, { useState } from 'react'

function Hookcounter3() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            </form>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </div>
    )
}

//spread operator is to overwrite saying just copy the object in the state and change only this value in the setState
export default Hookcounter3
