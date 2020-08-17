import React, { useState } from "react";
import "./style.css";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    console.log("Button is clicked");
    setHeadingText("Data uploaded");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
