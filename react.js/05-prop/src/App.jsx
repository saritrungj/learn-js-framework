import Student from './Student'
import './App.css'
/*
// Prop = read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component key=value /> */

function App() {

  return (
    <>
      <Student
        name="Spongebob"
        age={30}
        isStudent={true}
      />
      <Student
        name="Patrick"
        age={38}
        isStudent={false}
      />
      <Student
        name="Squidward"
        age={50}
        isStudent={false}
      />
      <Student
        name="Sandy"
        age={27}
        isStudent={true}
      />
      <Student
      name="Larry"
      />
    </>
  )
}

export default App
