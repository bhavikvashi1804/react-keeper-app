import React, { useState } from "react";
import "./style.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(event) {}

  function onMouseOverFunction() {
    setMouseOver(true);
  }

  function onMouseOutFunction() {
    setMouseOver(false);
  }

  function handleChange(event) {
    if (event.target.name === "fName") {
      setFname(event.target.value);
    } else if (event.target.name === "lName") {
      setLname(event.target.value);
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}{" "}
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fname}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={lname}
          onChange={handleChange}
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
