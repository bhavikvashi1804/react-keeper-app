import React from "react";

import Card from './Card';
import contacts from './contacts';
import Avatar from './Avatar';

import "./style.css";

function createCard(contact){
  return (
    <Card 
      key={contact.id}
      //key must require for list
      //key is not prop
      //you cannot access this key in component
      name={contact.name}
      image={contact.imgURL}
      mobile={contact.phone}
      email={contact.email}
    />
  );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3s55O_no6FMNB63sweRv8SW6eweXI2ZCBCg&usqp=CAU" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
