import { useCallback, useMemo, useState } from 'react'

const UseCallbackDemo1 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Content id={count} />
        </div>
    )
}


const Content = ({ id }) => {
    console.log("Re-render")
    const handleClick = useCallback(() => {
        console.log("Click")
    }, [id])

    return (
        <div>
            <h1>UseCallback Demo {id}</h1>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}

export default UseCallbackDemo1