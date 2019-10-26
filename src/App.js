import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import "./App.css";
var shuffle = require('shuffle-array');
const idArr = [];

class App extends Component {

  state = {
    pokemon
  }

  randomizeArr = id => {
    console.log(id);
    if(!idArr.includes(id))
    idArr.push(id);
    else
    console.log("Try another");
    console.log(idArr);
    shuffle(pokemon);
    this.setState({ pokemon });
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Pokemon List</h1>
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
            randomizeArr={this.randomizeArr}
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
