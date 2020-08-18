import React, { useState } from "react";

import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

import "./style.css";

function App() {
  
  const [tasks, setTasks] = useState([]);

  function handleAddButton(newTaskName) {
    setTasks((prevValue) => {
      return [...prevValue, newTaskName];
    });
   
  }

  

  function deleteTask(todoItemIndex) {
    //console.log("Delete this item");
    setTasks((prevValue) => {
      return prevValue.filter(
        (item,index)=>{
          return index!== todoItemIndex;
        }
      );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onAddHandler={handleAddButton}/>
      </div>
      <div>
        <ul>
          {tasks.map((todoItem, todoItemIndex) => (
            <ToDoItem
              key={todoItemIndex}
              id={todoItemIndex}
              toDoItemText={todoItem}
              onChecked={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
