import React from 'react'
import { useState } from 'react'

const UseStateDemo3 = () => {
    const intialState = { username: "", password: "" }
    const [account, setAccount] = useState(intialState)
    const [accountList, setAccountList] = useState([])
    return (
        <div>
            {/* <p>#debug: {JSON.stringify(account)}</p> */}
            <p>#debugAccount List: {JSON.stringify(accountList)}</p>
            <form action="">
                <input type="text"
                    placeholder="Username"
                    value={account.username}
                    onChange={e => { setAccount({ ...account, username: e.target.value }) }}
                />
                <br />
                <input type="text"
                    placeholder="Password"
                    value={account.password}
                    onChange={e => { setAccount({ ...account, password: e.target.value }) }}
                />
                <br />
                <button onClick={e => {
                    e.preventDefault();
                    setAccountList([...accountList, { ...account, index: accountList.length }])
                }}>Submit</button>
                <button onClick={e => {
                    e.preventDefault();
                    setAccount(intialState)
                    setAccountList([])
                }}>Clear</button>
            </form>
            <ul>
                {accountList.map((item, index) => (
                    <li key={index}>Username: {item.username}, Password: {item.password}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateDemo3