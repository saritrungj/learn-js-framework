import React, { useEffect, useState } from 'react'

const UseEffectDemo2 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // Called whenever state is changed
        document.title = `Current count: ${count}`
        return () => {
        // Called when component is deleted
        document.title = "The component was just destroyed"
        console.log("Destroyed")
        }
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>

    )
}

export default UseEffectDemo2