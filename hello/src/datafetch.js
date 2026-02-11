import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetch() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idfrombutton, setIdfrombutton] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                if (err.name !== 'CanceledError') {
                    console.log(err)
                }
            })
    }, [id])

    const onButtonClick = () => {
        setId(idfrombutton)
    }

    return (
        <div>
            <input type="text" value={idfrombutton} onChange={e => setIdfrombutton(e.target.value)} />
            <button onClick={onButtonClick}>Fetch Post</button>
            <ul>{post.title}</ul>
        </div>
    )
}

export default DataFetch
