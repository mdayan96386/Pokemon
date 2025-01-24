export const PokeReducer = (state, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokeData: action.payload,
        isError: false,
      };

    case "NOT_FOUND":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
