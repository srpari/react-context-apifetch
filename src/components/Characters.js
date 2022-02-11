import React, { useContext, useEffect } from "react";
import CharacterContext from "../context/ContextAPI";
import { Card } from "react-bootstrap";

function Characters() {
  const { characters, getCharacters, getMovieList } =
    useContext(CharacterContext);

  useEffect(() => {
    getCharacters();
  }, []);

  console.log("peopleContext " + JSON.stringify(characters));

  return (
    <div className="list-group h-100">
      {characters.map((item, index) => (
        // <a
        //   className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
        //   href="#"
        //   key={index}
        //   onClick={() => getMovieList()}
        // >
        <Card
          className="pt-10 bg-gray-300"
          key={index}
          onClick={() => getMovieList()}
          style={{
            cursor: "pointer",
            border: "2px solid #ffc107",
            width: "20rem",
            height: "5rem",
          }}
        >
          {item.name}
        </Card>
        /* <p>{item.name}</p> */
        // </a>
      ))}
    </div>
  );
}

export default Characters;
