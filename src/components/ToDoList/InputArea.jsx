import React, { useState } from "react";

function InputArea(props) {
  const [taskName, setTaskName] = useState("");

  function handleChange(event) {
    setTaskName(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={taskName} />
      <button
        onClick={() => {
          props.onAddHandler(taskName);
          setTaskName("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
