import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
// import "./App.css";

var shuffle = require('shuffle-array');
let idArr = [];
let score = 0;
let topscore = 0;
let value = "GOTTA CATCH 'EM ALL";

class App extends Component {

  state = {
    pokemon,
    score,
    topscore,
    value
  }

  randomizeArr = id => {
    console.log(id);
    if (!idArr.includes(id)) {
      idArr.push(id);
      score = score + 1;
      if (score > topscore)
        topscore = score;
      value = "CAPTURED !"
    }
    else {
      console.log("OOPS! ALREADY CAPTURED!");
      if (score > topscore)
        topscore = score;
      idArr = [];
      score = 0;
      value = "OOPS! ALREADY CAPTURED!";
    }
    console.log(idArr);
    shuffle(pokemon);
    this.setState({ pokemon, score, topscore, value });
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          value={this.state.value}
          score={this.state.score}
          topscore={this.state.topscore}
        />
        {/* <Jumbotron
          topscore={this.state.topscore}
        /> */}
        <br></br><br></br>
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
