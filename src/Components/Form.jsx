import React, { useContext, useState } from "react";
import { fetchPokemon } from "../Context/PokeService";
import PokeContext from "../Context/PokeContext";

function Form() {
  const { dispatch } = useContext(PokeContext);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchPokemon(text);

    if (data === "NOT_FOUND") {
      dispatch({
        type: "NOT_FOUND",
      });
    } else {
      dispatch({
        type: "GET_POKEMON",
        payload: data,
      });
    }
    setText("");
  };

  return (
    <>
      <h1 className="my-2 text-center text-black font-bold text-3xl lg:my-6">
        Search Any Pokemon Here
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" my-2 w-full py-3 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Enter Pokemon Name.."
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-green-600 px-2 py-1 text-white w-full my-2">
          Search
        </button>
      </form>
    </>
  );
}

export default Form;
