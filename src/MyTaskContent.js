import React, { useState } from "react";

export default function MyTaskContent() {
  const [clicked, setClicked] = useState(false);

  const onClick = (e) => {
    setClicked(!clicked);
    e.stopPropagation();
  };

  return (
    <button style={btn} onClick={onClick}>
      {clicked ? "Was clicked" : "Click me"}
    </button>
  );
}

const btn = {
  fontSize: "10px",
  position: "relative",
  zIndex: 2,
};
