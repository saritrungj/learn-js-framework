import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

  function handleYearChange(event) {
    setCar(c => ({...c, year: event.target.value}))
  }
  function handleMakeChange(event) {
    setCar({make: event.target.value})
  }
  function handleModelChange(event) {
    setCar({model: event.target.value})
  }
  return(
    <>
      <div>
        <p>You favorite cars is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make}  onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
      </div>
    </>
  )
}

export default MyComponent