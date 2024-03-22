import { useState } from "react"

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return(
    <>
      <div className="container">
        <div className="color-picker-container">
          <h1>Color Picker</h1>
          <div className="color-display" style={{backgroundColor: color}}>
            <p>Select Color: <span>{color}</span></p>
          </div>
          <label htmlFor="">Select a Color:
          <input type="color" value={color} onChange={handleColorChange}/></label>
        </div>
      </div>
    </>
  )
}

export default ColorPicker