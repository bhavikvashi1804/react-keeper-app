import React,{useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from './CreateArea';


import "./keep.css";

function App() {

  const [notes,setNotes]=useState([]);

  function addNote(note){
    setNotes(
      (prevValue)=>{
        return [...prevValue,note];
      }
    );    
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {
        notes.map((noteItem,noteItemIndex)=>{
          return <Note key={noteItemIndex} id={noteItemIndex} title={noteItem.title} content={noteItem.content} />
        })
      }
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
