// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import { createContext, useContext, useState } from "react"
import ComponentB from './ComponentB.jsx'
export const UserContext = createContext()
function ComponentA() {
  const [user, setUser] = useState("Sarit");
  return(
    <>
    <div className="box">
      <h1>ComponentA</h1>
      <h1>{`hello ${user}`}</h1>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
      
    </div>
    </>
  )
}

export default ComponentA