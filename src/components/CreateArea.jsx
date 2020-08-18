import React, { useState } from "react";

function CreateArea(props) {
  const [note, updateNote] = useState({
    title: "",
    content: "",
  });

  function handleNoteChange(event) {
    const { name, value } = event.target;
    updateNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function submitNote(event) {
    props.onAddNote(note);
    updateNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleNoteChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleNoteChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
