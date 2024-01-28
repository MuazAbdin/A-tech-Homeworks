import { useState } from "react";
import "./App.css";
import { imagesData, conversationsData } from "./assets/data.js";
import Conversation from "./components/Conversation.jsx";
import List from "./components/List.jsx";

const contacts = [
  ...new Set(conversationsData.conversations.map((c) => c.with)),
];

function App() {
  const [currentImg, setCurrentImg] = useState(imagesData.currentImg);
  const [displayConversation, setDisplayConversation] = useState(
    conversationsData.displayConversation
  );

  return (
    <>
      <section>
        <h2>Exercise 1</h2>
        <div>
          <button
            onClick={() => setCurrentImg((c) => Math.max(0, c - 1))}
            disabled={currentImg === 0}
          >
            PREVIOUS
          </button>
          <button
            onClick={() => setCurrentImg((c) => Math.min(2, c + 1))}
            disabled={currentImg === 2}
          >
            NEXT
          </button>
        </div>
        <img src={imagesData.images[currentImg]} alt="" width={350} />
      </section>
      <hr />
      <section>
        <h2>Exercise 2</h2>
        {displayConversation ? (
          <Conversation
            conversation={conversationsData.conversations.find(
              (c) => c.with === displayConversation
            )}
            handleDisplay={setDisplayConversation}
          />
        ) : (
          <List contacts={contacts} handleDisplay={setDisplayConversation} />
        )}
      </section>
    </>
  );
}

export default App;
