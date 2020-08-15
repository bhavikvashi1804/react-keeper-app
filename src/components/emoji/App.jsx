import React from "react";
import EmojiOne from "./EmojiOne";
import emojipedia from "./emojipedia";
import "./style.css";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emoji1 => (
          <EmojiOne
            key={emoji1.id}
            emoji={emoji1.emoji}
            name={emoji1.name}
            meaning={emoji1.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
