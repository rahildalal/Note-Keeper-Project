import React, {useState} from "react";

// Import icons from MaterialUI
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  // useState to manage appearance of new note when user clicks inside textarea
  const [initialized, setInitialized] = useState({
    contentHide: "hidden",
    textRows: "1",
    buttonBool: false
  });

  // function to handle "initialized" useState
  function handleClick() {
    setInitialized(()=>{return {
      contentHide: "none",
      textRows: "3",
      buttonBool: true
    }})
  }

  // function to handle "initialized" useState when user clicks outside textarea w/o input
  function handleBlur() {
    if (input.title === "" && input.content === "") {
      setInitialized(()=>{return {
        contentHide: "hidden",
        textRows: "1",
        buttonBool: false
    }
    })}
  }

  // useState to manage the input data for new note
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  // function to get inpput data on change in note title & content
  function handleChange(event) {
    const {name, value} = event.target;

    setInput((prevValue)=>{
      return{...prevValue,
      [name]: value}
    });
  }

  // function to send new note to "notes" in App component and reset initialized useState
  function handlePlusClick(event) {
      props.addNote(input); //Prop to return the new note to App.js
      event.preventDefault(); 

      setInput({title: "", content: ""})

      setInitialized(()=>{return {
            contentHide: "hidden",
            textRows: "1",
            buttonBool: false
        }})
  }

  // Structure of the note input elements
  return (
    <div>
      <form className="create-note">
        <input type={initialized.contentHide} onClick={handleClick} onChange={handleChange} name="title" placeholder="Title" value={input.title} />
        <textarea onBlur={handleBlur} onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={initialized.textRows} value={input.content} />
        {/* Zoom from MaterialUI for animation of plus button */}
        <Zoom in={initialized.buttonBool}> 
        {/* Fab from MaterialUI for '+' FAB used */}
        <Fab onClick={handlePlusClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}


// export React component CreateArea to create new note
export default CreateArea;
