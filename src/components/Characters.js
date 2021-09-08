import React from "react";
import { useGlobalContext } from "../context/ContextAPI";

function Characters() {
  const { characters } = useGlobalContext();

  return (
    <ul>
      {characters.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

export default Characters;
