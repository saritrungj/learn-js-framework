// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safge updates based on the previous sate
//                    Used with multiple sate updates and asynchronous functions
//                    Good practice to use updater functions

import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {

    // uses the CURRENT state to calculate the NEXT state.
    // set functions fo not trigger an update.
    // React barches together state updates for performance reasons.
    // NEXT state becomes the use updater functions
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  
  const reset = () => {
    setCount(0);
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