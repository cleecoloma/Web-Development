import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setInputNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function sendNote(event) {
    props.onAdd(inputNote);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputNote.content} />
        <button onClick={sendNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
