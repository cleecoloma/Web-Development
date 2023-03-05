import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange() {
    // console.log(target.value);
    setName(target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function handleClicked(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClicked}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
