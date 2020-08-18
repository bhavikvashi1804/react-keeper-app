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
    //const newValue=event.target.value;
    //const inputTypeName=event.target.name;
    //you must have to get the input type name and new value before setting it
    //now use the object destructuring
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
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
