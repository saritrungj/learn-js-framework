import './App.css'
import UseCallbackDemo1 from './components/UseCallbackDemo1/UseCallbackDemo1'
import UseContextDemo1 from './components/UseContextDemo1/UseContextDemo1'
import UseEffectDemo1 from './components/UseEffectDemo1/UseEffectDemo1'
import UseEffectDemo2 from './components/UseEffectDemo2/UseEffectDemo2'
import UseEffectDemo3 from './components/UseEffectDemo3/UseEffectDemo3'
import UseEffectDemo4 from './components/UseEffectDemo4/UseEffectDemo4'
import UseMemoDemo from './components/UseMemoDemo1/UseMemoDemo'
import UseStateDemo1 from './components/UseStateDemo1/UseStateDemo1'
import UseStateDemo2 from './components/UseStateDemo2/UseStateDemo2'
import UseStateDemo3 from './components/UseStateDemo3/UseStateDemo3'
import { useState } from 'react'
function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <>
      {/* <UseStateDemo1 /> */}
      {/* <UseStateDemo2 /> */}
      {/* <UseStateDemo3 /> */}
      {/* <UseEffectDemo1 /> */}
      {/* {isShow && <UseEffectDemo2 />}
      <button onClick={()=>setIsShow(false)}>Hide</button> */}
      {/* <UseEffectDemo3 /> */}
      {/* <UseEffectDemo4 /> */}
      {/* <UseContextDemo1 /> */}
      {/* <UseMemoDemo /> */}
      <UseCallbackDemo1 />
    </>
  )
}

export default App
