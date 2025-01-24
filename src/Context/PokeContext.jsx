import { useReducer } from "react";
import { createContext } from "react";
import { PokeReducer } from "./PokeReducer";

const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const initialState = {
    pokeData: null,
    isError : false,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  return (
    <PokeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContext;
