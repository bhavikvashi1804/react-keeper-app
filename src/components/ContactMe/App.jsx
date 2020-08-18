import React, { useState } from "react";

import "./style.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // must require the [] for name
    // return {} must require ( before {
    setContact((prevValue) => ({...prevValue,[name]:value,}));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
