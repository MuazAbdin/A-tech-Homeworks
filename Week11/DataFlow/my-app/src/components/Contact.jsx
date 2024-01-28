import React from "react";

function Contact({ name, handleDisplay }) {
  return <button onClick={() => handleDisplay(name)}>{name}</button>;
}

export default Contact;
