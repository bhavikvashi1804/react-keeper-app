import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import "./keep.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      {notes.map((noteItem, noteItemIndex) => {
        return (
          <Note
            key={noteItemIndex}
            id={noteItemIndex}
            title={noteItem.title}
            content={noteItem.content}
            onDeleteNote={deleteNote}
          />
        );
      })}
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
