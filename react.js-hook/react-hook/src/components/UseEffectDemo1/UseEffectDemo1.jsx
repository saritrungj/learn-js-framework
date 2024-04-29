import React, { useEffect, useState } from 'react'

const UseEffectDemo1 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // Called whenever state is changed
        document.title = `Current count: ${count}`
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>

    )
}

export default UseEffectDemo1