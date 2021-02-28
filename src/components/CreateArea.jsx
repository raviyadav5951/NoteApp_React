import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [notesContent, setNoteContent] = useState({
    title: "",
    notebody: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevItems) => {
      if (name === "title") {
        return {
          title: value,
          notebody: prevItems.notebody
        };
      } else if (name === "content") {
        return {
          notebody: value,
          title: prevItems.title
        };
      }
    });
  }

  function submitNote(event) {
    props.onAdd(notesContent);
    setNoteContent({
      title: "",
      notebody: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notesContent.title}
        />
        <textarea
          value={notesContent.notebody}
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
