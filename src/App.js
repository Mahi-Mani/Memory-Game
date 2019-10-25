import React from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">Pokemon List</h1>
      <PokemonCard
        name={pokemon[0].name}
        image={pokemon[0].image}
      />
      <PokemonCard
        name={pokemon[1].name}
        image={pokemon[1].image}
      />
      <PokemonCard
        name={pokemon[2].name}
        image={pokemon[2].image}
      />
    </Wrapper>
  );
}

export default App;
