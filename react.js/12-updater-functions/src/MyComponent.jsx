// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1)
//                    Allow for safge updates based on the previous sate
//                    Used with multiple sate updates and asynchronous functions
//                    Good practice to use updater functions

import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {

    // UPDATE FUNCTIONS
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }

  const reset = () => {
    setCount(prevCount => prevCount = 0);
  }

  return (
    <>
      <div className="container">
        <div className="counter-program">
          <p className="count-display">{count}</p>
          <div className="buttons">
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyComponent