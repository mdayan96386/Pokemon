import React, { useContext } from "react";
import PokeContext from "../Context/PokeContext";

function Card() {
  const { pokeData, isError } = useContext(PokeContext);

  if (isError) {
    return (
      <div className="my-20 py-20 flex items-center justify-center flex-col shadow-xl border-2">
        <h1 className="text-center font-semibold text-3xl text-gray-500">404 No Pokemon Found Try Again</h1>
      </div>
    );
  }

  if (!pokeData) {
    return (
      <div className="my-20 py-20 flex items-center justify-center flex-col shadow-xl border-2 lg:px-16 ">
        <img className="w-24" src="https://i.gifer.com/origin/7d/7dab25c7b14a249bbc4790176883d1c5_w200.gif"  alt=""/>
        <h1 className="text-center font-semibold text-3xl text-gray-500">Searching Pokemon...</h1>
      </div>
    );
  }

  return (
    <div className="my-3 rounded-none p-3 border border-black flex items-center justify-between text-center flex-col">
      <div>
        <h1 className="text-3xl font-semibold">Name : {pokeData.species.name}</h1>
        <p>Type: {pokeData.types[0].type.name}</p>
      </div>
      <img
        className="my-5"
        src={pokeData.sprites.other.dream_world.front_default}
        alt=""
      />
    </div>
  );
}

export default Card;
