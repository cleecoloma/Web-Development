import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emote) {
  return (
    <Card 
      key={emote.id}
      img={emote.emoji}
      name={emote.name}
      meaning={emote.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
