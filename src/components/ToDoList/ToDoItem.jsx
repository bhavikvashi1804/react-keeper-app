import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.toDoItemText}</li>
    </div>
  );
}

export default ToDoItem;
