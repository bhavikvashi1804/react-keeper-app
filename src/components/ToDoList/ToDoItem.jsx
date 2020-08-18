import React,{useState} from "react";

function ToDoItem(props) {
  
  return (<div >
    <li >{props.toDoItemText}</li>
  </div>);
}

export default ToDoItem;
