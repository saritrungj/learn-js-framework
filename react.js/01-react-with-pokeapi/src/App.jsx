import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let abortController = new AbortController();
    const loadPoke = async () => {
      try {
        setLoading(true);
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`, { signal: abortController.signal });
        setPoke(res.data);
        setError("");
      } catch (error) {
        setError("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    }

    loadPoke();
    return () => abortController.abort();
  }, [])

  console.log(poke);

  return (
    <>
      <div>
        <h1>{poke?.name}</h1>
        <img src={poke?.sprites.other.home.front_default} alt="" />
        <ul>
          {poke?.abilities.map((abil, idx) => (
            <li key={idx}>{poke?.ability.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
