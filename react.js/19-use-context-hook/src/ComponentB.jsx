// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import { useContext } from "react"
import { UserContext } from "./ComponentA"
import ComponentC from './ComponentC.jsx'

function ComponentB() {

  const user = useContext(UserContext)

  return(
    <>
    <div className="box">
      <h1>ComponentB</h1>
      <h2>{`Say hi 1 more time ${user}`}</h2>
      <ComponentC />
    </div>
    </>
  )
}

export default ComponentB