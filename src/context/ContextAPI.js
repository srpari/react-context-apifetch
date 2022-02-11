import React, { useReducer } from "react";
import axios from "axios";

const CharacterContext = React.createContext();

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: payload,
      };
    case "GET_FILMS":
      return {
        ...state,
        films: payload,
      };
    default:
      return state;
  }
};

const CharacterState = (props) => {
  const initialState = {
    characters: [{}],
    films: [{}],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get("https://swapi.dev/api/people/");

    dispatch({
      type: "GET_CHARACTERS",
      payload: res.data.results,
    });
  };

  const getMovieList = async () => {
    const res = await axios.get("https://swapi.dev/api/films/");
    console.log("Movie List " + JSON.stringify(res.data.results));
    dispatch({
      type: "GET_FILMS",
      payload: res.data.results,
    });
  };

  return (
    <div>
      <CharacterContext.Provider
        value={{
          characters: state.characters,
          films: state.films,
          getCharacters,
          getMovieList,
        }}
      >
        {props.children}
      </CharacterContext.Provider>
    </div>
  );
};

export { CharacterState };

export default CharacterContext;
