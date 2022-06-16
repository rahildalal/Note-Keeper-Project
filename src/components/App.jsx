import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  // useState to manage notes entered by user
  const [notes, setNotes] = useState([]);

  // function to add new note generated from "CreateArea" to "notes"
  function newNote(note) {
    setNotes((prevValue)=>{
      return [...prevValue, note];
    });
  }

  // function to delete a note
  function delNote(id) {
    setNotes((prevValue)=>{
      return prevValue.filter((note, index)=>{
        return index !== id;
      })
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea
        addNote = {newNote}
      />
      {notes.map((note, index) => {
        return <Note 
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          delNote = {delNote}
        />
      })}
      <Footer />
    </div>
  );
}

// export App component to index.js
export default App;
