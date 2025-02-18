import { useEffect, useState } from "react";
import Card from "./Components/Card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setSearch] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon";

  async function getPokemon() {
    try {
      const res = await fetch(url);
      const data = await res.json();

      const allpokdata = data.results.map(async (obj) => {
        const res = await fetch(obj.url);
        const realdata = await res.json();
        return realdata;
      });

      const detaildata = await Promise.all(allpokdata);
      setPokemon(detaildata);

      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  useEffect(() => {
    getPokemon();
  });

  if (loading) {
    return (
      <div className="bg-black w-full h-screen border items-center justify-center flex text-white">
        Loading....
      </div>
    );
  }

  const searchPokemon = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className=" h-[10vh] w-full fixed flex items-center justify-center ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here..."
            className="opacity-90 pl-5 p-3 bg-black text-slate-400 rounded-3xl w-[50vw]"
          />
        </div>
        <div className=" h-[100vh] flex justify-center items-center">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className=" w-[90vw] h-[600px] flex ml-20 overflow-auto  relative scroll-smooth  scroll-m-0 flex-wrap mt-14  p-6"
          >
            {searchPokemon.map((eachpokemon) => (
              <Card key={eachpokemon.id} pokemoninfo={eachpokemon}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
