import React,{useState} from "react";

function ToDoItem(props) {
  const [taskDone, setTaskDone] = useState(false);
  function changeDoneStatus() {
    setTaskDone((prevValue) => {
      return !prevValue;
    });
  }
  return (<div onClick={changeDoneStatus}>
    <li style={{textDecoration:taskDone?"line-through":"none"}}>{props.toDoItemText}</li>
  </div>);
}

export default ToDoItem;
