import React from "react";
import Contact from "./Contact";

function List({ contacts, handleDisplay }) {
  return (
    <>
      {contacts.map((c, i) => (
        <Contact key={`#${c}-${i}`} name={c} handleDisplay={handleDisplay} />
      ))}
    </>
  );
}

export default List;
