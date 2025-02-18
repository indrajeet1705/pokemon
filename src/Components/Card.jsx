import React, { useState } from "react";

const Card = ({ pokemoninfo }) => {
  return (
    <div className="border-purple-500 border flex-col relative w-[230px] object-cover  group  overflow-hidden items-center justify-center flex h-[330px] ml-3 mt-4 rounded-3xl transform transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-400 ">
      <img src={pokemoninfo.sprites.other.dream_world.front_default} alt="" />
      <div className="absolute  w-[230px]  h-[330px]   bg-slate-200 opacity-80 hidden group-hover:block ">
        <div className=" w-[230px] p-5  font-semibold gap-4 h-[330px] flex flex-col">
          <h3 className="text-center ">{pokemoninfo.name}</h3>
          <div className="grid-three-cols">
            <p> height : {pokemoninfo.height}</p>
            <p>weight : {pokemoninfo.weight}</p>
            <p>speed : {pokemoninfo.stats[5].base_stat}</p>
            <p>experience : {pokemoninfo.base_experience}</p>
            <p>
              abilities :{" "}
              {pokemoninfo.abilities.map((obj) => obj.ability.name).join(",")}
            </p>
            <p>attack : {pokemoninfo.stats[1].base_stat}</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-500  p-1 items-center justify-center flex px-4 absolute bottom-3 rounded-2xl text-white ">
        <p>{pokemoninfo.types.map((obj) => obj.type.name).join(", ")} </p>
      </div>
    </div>
  );
};

export default Card;
