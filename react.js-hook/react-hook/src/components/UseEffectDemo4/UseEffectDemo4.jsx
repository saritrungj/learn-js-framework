import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectDemo4 = () => {
  const [dataArray, setDataArray] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const { data } = res
        console.log(data)
        // alert(JSON.stringify(data))
        setDataArray(data)
      })
  }, [])

  return (
    <div>
      {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
      <ul>
        {dataArray && dataArray.map((item, idx) => (
          <li key={idx} style={{ width: "450px" }}>
            Item No: <span style={{ color: "red" }}>{item.id}</span>,
            Title: <span style={{ color: "blue" }}>{item.title}</span> <br />
            Post Detail: <span style={{ color: "green" }}>{item.body}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectDemo4