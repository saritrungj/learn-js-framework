import { useState } from "react"

function ToDoList() {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Wash Dishes", "Walk a dog"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => i !== index)
    setTasks(updateTask)
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]]
      setTasks(updateTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]]
      setTasks(updateTasks)
    }
  }

  return (
    <>
      <div className="container">
        <div className="todo-list-container">
          <h1>To-Do-List</h1>
          <div className="new-task">
            <input type="text" placeholder="Enter a task" value={newTask}
              onChange={handleInputChange} />
            <button className="add-button" onClick={() => addTask()}>Add</button>
          </div>
          <div className="task-list">
            <ul>
              {tasks.map((task, index) =>
                <li key={index}>
                  <span className="text">{task}</span>
                  <div className="buttons">
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>⬆</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>⬇</button>
                  </div>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoList