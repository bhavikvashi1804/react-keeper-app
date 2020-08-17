import React, { useState } from "react";
import "./style.css";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    console.log("Button is clicked");
    setHeadingText("Data uploaded");
  }

  function onMouseOverFunction() {
    setMouseOver(true);
  }

  function onMouseOutFunction() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver?"black":"white" }}
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
