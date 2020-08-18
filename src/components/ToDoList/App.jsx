import React, { useState } from "react";

import ToDoItem from './ToDoItem';

import "./style.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddButton() {
    setTasks((prevValue) => {
      return [...prevValue, taskName];
    });
    setTaskName("");
  }

  function handleTaskChange(event) {
    setTaskName(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={handleTaskChange}
        />
        <button onClick={handleAddButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map(todoItem => (
            <ToDoItem  toDoItemText={todoItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
