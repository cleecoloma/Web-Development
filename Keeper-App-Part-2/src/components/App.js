import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(newNote => (<Note 
      key={newNote.key}
      title={newNote.title}
      content={newNote.content}
      />))}
      <Footer />
    </div>
  );
}

export default App;
