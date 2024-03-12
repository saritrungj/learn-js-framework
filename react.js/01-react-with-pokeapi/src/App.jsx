import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);

  useEffect(() => {
    let abortController = new AbortController();
    const loadPoke = async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${number}`,
          {
            signal: abortController.signal,
          }
        );

        setPoke(res.data);
        setError("");
      } catch (error) {
        setError("Something went wrong" + error);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();
  }, [number]);

  const prevPoke = () => {
    setNumber((number) => number - 1);
  };

  const nextPoke = () => {
    setNumber((number) => number + 1);
  };

  console.log(poke);
  return (
    <div className="container">
      <div className="poke-box">
        <div className="poke-header">
          <h1>
            No.{poke?.id} {poke?.name}
          </h1>
        </div>
        <div className="poke-card">
          <div className="poke-info">
            <img
              className="poke-header-image"
              src={poke?.sprites?.other?.home?.front_default}
              alt={poke?.name}
            />
            <h1>Skills</h1>
            <ul>
              {poke?.abilities?.map((abil, idx) => (
                <li key={idx}>{abil?.ability?.name}</li>
              ))}
            </ul>
            <h1>Elements</h1>
            <ul>
              {poke?.types.map((type, idx) => (
                <li key={idx}>{type?.type?.name}</li>
              ))}
            </ul>
            <div className="poke-form">
              <h1>Front and back</h1>
              <img src={poke?.sprites?.front_default} alt={poke?.name} />
              <img src={poke?.sprites?.front_shiny} alt={poke?.name} />
              <img src={poke?.sprites?.back_default} alt={poke?.name} />
              <img src={poke?.sprites?.back_shiny} alt={poke?.name} />
            </div>
          </div>
        </div>
        <div className="button">
          <button onClick={prevPoke}>Previous</button>
          <button onClick={nextPoke}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
