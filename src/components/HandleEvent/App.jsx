import React, { useState } from "react";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(event) {
    //console.log("Button is clicked");
    //setHeadingText("Data uploaded");
    setHeadingText(name);
    event.preventDefault();
    //prevent Default will help us to rerender the same page 
    //if we use from onSubmit then it will re-render the page and lost the prev values
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
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={onMouseOverFunction}
          onMouseOut={onMouseOutFunction}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
