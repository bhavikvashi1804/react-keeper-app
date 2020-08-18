import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

import "./keep.css";

function CreateArea(props) {
  const [isExpanded, updateExpaned] = useState(false);

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

  function expand() {
    updateExpaned(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleNoteChange}
          />
        ) : null}
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
          onChange={handleNoteChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
