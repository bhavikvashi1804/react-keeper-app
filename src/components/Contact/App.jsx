import React from "react";

import Card from './Card';
import contacts from './contacts';
import Avatar from './Avatar';

import "./style.css";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3s55O_no6FMNB63sweRv8SW6eweXI2ZCBCg&usqp=CAU" />
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        mobile={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        mobile={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        mobile={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
