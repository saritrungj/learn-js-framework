import React from 'react'
import ThemeContext from './ThemeContext'
import UseContextDemoChild from './UseContextDemoChild'

const UseContextDemo1 = () => {
    return (
        <div>
            <ThemeContext.Provider value="lightgreen">
                <UseContextDemoChild />
            </ThemeContext.Provider>
        </div>
    )
}

export default UseContextDemo1