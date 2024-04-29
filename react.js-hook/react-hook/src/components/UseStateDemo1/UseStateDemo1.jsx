import React from 'react'
import { useState } from 'react'

const UseStateDemo1 = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("")
    return (
        <div style={{ textAlign: "center" }}>

            UseState: {count} <br />
            <button onClick={() => {
                setCount(count + 1);
                setTitle("Increase number")
            }}>Add</button>
            <button onClick={() => {
                setCount(0);
                setTitle("Reset Number")
            }}>Reset</button>
            <br />
            Title: {title}
        </div>
    )
}

export default UseStateDemo1