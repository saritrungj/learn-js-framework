import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectDemo3 = () => {
    const [count, setCount] = useState(0)
    const doSomething = () => {
        setCount(count + 1)
        console.log("Do Some Thing")
    }
    useEffect(() => {
        const intervalId = setInterval(doSomething, 1000)
        document.title = `Current counter is ${count}`
        // Clean up
        return () => {
            clearInterval(intervalId)
        }
    }, [count])

    return (
        <>
            <div>
                <h1>{count}</h1>
            </div>
        </>
    )
}

export default UseEffectDemo3