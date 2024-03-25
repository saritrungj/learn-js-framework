import { useState } from "react"

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById('food-input').value;
    document.getElementById('food-input').value = '';

    setFoods(f => [...f, newFood]);
  }

  function handlermoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index))
  }

  return(
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => <li key={index} onClick={() => handlermoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="food-input" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  )
}

export default MyComponent