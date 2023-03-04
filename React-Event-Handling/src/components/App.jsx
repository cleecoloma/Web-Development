import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    setHeadingText("Submitted");
  }

  const [isMouseOver, setMouseOver] = useState(false);

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
