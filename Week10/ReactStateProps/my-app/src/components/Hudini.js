import React, { useState } from "react";

function Hudini() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Toggle</button>
      {show ? <div>Now you see me</div> : <div>Now you don’t</div>}
    </>
  );
}

export default Hudini;
