import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const ContextAPI = React.createContext();

export function ContextAPIProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  // const [charactersDetail, setCharactersDetail] = useState([]);

  useEffect(() => {
    async function fectchData() {
      const { data } = await axios.get(`https://swapi.dev/api/people/`);

      console.log(data.results);

      if (data.results) {
        setCharacters(data.results);
      } else {
        console.log("SWAPI LIST Not Present ");
        setCharacters([]);
      }

      // const { data } = await axios.get(`https://swapi.dev/api`);
      // const { swapiJSON } = data;

      // console.log(swapiJSON);

      // if (data) {
      //   console.log("SWAPI LIST Present " + JSON.stringify(data));
      //   const swapiList = [data].map((item) => {
      //     const { people, films, species, vehicles, starships, planets } = item;
      //     return {
      //       people: people,
      //       films: films,
      //       species: species,
      //       vehicles: vehicles,
      //       starships: starships,
      //       planets: planets,
      //     };
      //   });
      //   setCharactersDetail(swapiList);
      // } else {
      //   console.log("SWAPI LIST Not Present " + JSON.stringify(swapiJSON));
      //   setCharactersDetail([]);
      // }
      // setCharactersDetail([]);
    }
    fectchData();
  }, []);

  return (
    <div>
      <ContextAPI.Provider value={{ characters }}>
        {children}
      </ContextAPI.Provider>
    </div>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(ContextAPI);
};
