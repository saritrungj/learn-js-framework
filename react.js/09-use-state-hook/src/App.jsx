import './App.css'
import Counter from './Counter'
import MyComponent from './MyComponent'

// React hook = Special function that allows functional components
//              to user React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more)

//  useState() = A React hook that allows the creation of a stateful variable
//               AND a setter function to update its value in the Virtual DOM.
//               [name, setName]

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
