import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const UseContextDemoChild = () => {
    const cc = useContext(ThemeContext)
    return (
        <div>
            <ThemeContext.Consumer>
                {color => <h1 style={{ color }}>Color is {color}</h1>}
            </ThemeContext.Consumer>
            <h2>{cc}</h2>
        </div>
    )
}

export default UseContextDemoChild