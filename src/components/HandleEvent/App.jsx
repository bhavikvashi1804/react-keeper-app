import React, { useState } from "react";
import "./style.css";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(event) {}

  function onMouseOverFunction() {
    setMouseOver(true);
  }

  function onMouseOutFunction() {
    setMouseOver(false);
  }

  function handleChange(event) {
    var oldFullName=fullName;
    if (event.target.name === "fName") {
      setFullName({
        fName:event.target.value,
        lName: oldFullName.lName,
      });
    } else if (event.target.name === "lName") {
      setFullName({
        fName:oldFullName.fName,
        lName:event.target.value,
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
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
