import React, { useState } from "react";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  
  function handleClick() {
    console.log("Button is clicked");
    //setHeadingText("Data uploaded");
  }

  function onMouseOverFunction() {
    setMouseOver(true);
  }

  function onMouseOutFunction() {
    setMouseOver(false);
  }

  function handleChange(event) {
    //console.log("Input get changed");
    //console.log(event.target.value);
    //console.log(event.target.placeholder);
    //console.log(event.target.type);

    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={onMouseOverFunction}
        onMouseOut={onMouseOutFunction}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
