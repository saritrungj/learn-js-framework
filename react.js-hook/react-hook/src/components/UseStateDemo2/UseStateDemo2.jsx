import React from 'react'
import { useState } from 'react'

const UseStateDemo2 = () => {
    const intialState = { username: "", password: "" }
    const [account, setAccount] = useState(intialState)
    return (
        <div>
            <p>#debug: {JSON.stringify(account)}</p>
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
                    alert(JSON.stringify(account))
                }}>Submit</button>
                <button onClick={e => {
                    e.preventDefault();
                    setAccount(intialState)
                }}>Clear</button>
            </form>
        </div>
    )
}

export default UseStateDemo2