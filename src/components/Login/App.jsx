import React from "react";
import Form from "./Form";

import './style.css';

var userIsRegistered = false;
//manually set this var to true / false and check the UI

function App() {
  return (
    <div className="container">
      <Form ltype={userIsRegistered} />
    </div>
  );
}

export default App;
