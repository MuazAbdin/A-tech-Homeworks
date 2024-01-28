import React from "react";

function Conversation({ conversation, handleDisplay }) {
  return (
    <section>
      <button onClick={() => handleDisplay(null)}>BACK</button>
      {conversation.convo.map((c, i) => {
        return (
          <div key={i}>
            <strong>{c.sender === "self" ? "Me" : conversation.with}:</strong>{" "}
            {c.text}
          </div>
        );
      })}
    </section>
  );
}

export default Conversation;
