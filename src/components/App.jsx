import React, { useState } from "react";
import Button from "./button";

function App() {
  const [initialstate, setstate] = useState(0);
  function handleclick() {
    return setstate(initialstate + 1);
  }
  return (
    <>
      <button onClick={handleclick} onMouseEnter={handleclick}>
        {initialstate}
      </button>
    </>
  );
}

export default App;
