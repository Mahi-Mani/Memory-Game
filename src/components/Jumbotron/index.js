import React from "react";

function Jumbotron (props) {
    return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Score : {props.score}</h1>
    <h1 className="display-4">Top Score : {props.topscore}</h1>
    <p className="lead">Try to capture all pokemons. Remember! You can capture a pokemon only once</p>
    <p className="lead">Click on a Pokemon to Begin!</p>
  </div>
</div>
    )
}

export default Jumbotron;