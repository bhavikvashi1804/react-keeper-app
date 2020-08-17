import React from "react";
import './style.css';

function handleClick(){
    console.log("Button is clicked");
}

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
