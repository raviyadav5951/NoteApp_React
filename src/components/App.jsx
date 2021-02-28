import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function handleChange() {}

  function addNote(newNote) {
    //console.log(noteObject);
    setItems((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onHandleChange={handleChange} onAdd={addNote} />

      {items.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.notebody}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
