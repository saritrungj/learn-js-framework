import './App.css'
import List from './List'

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 150 },
    { id: 3, name: "banana", calories: 60 },
    { id: 4, name: "coconut", calories: 55 },
    { id: 5, name: "pineapple", calories: 195 }
  ];

  const vageteble = [
    { id: 6, name: "carrot", calories: 50 },
    { id: 7, name: "orange", calories: 30 },
    { id: 8, name: "potatoes", calories: 150 },
    { id: 9, name: "corn", calories: 105 },
    { id: 10, name: "broccoli", calories: 60 }
  ];
  return (
    <>
      <div className="container">
        {fruits.length > 0 && <List items={fruits} category="Fruits" />}
        {vageteble.length > 0 && <List items={vageteble} category="Vageteble" />}
        
      </div>
    </>
  )
}

export default App
