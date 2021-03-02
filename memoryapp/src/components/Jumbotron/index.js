import React from "react";
import Background from '../../images/bg6.jpg';

function Jumbotron(props) {
  const Style = {
    jumbotron: {
      backgroundImage: `url(${Background})`
    }
  }
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="jumbotron mt-5 bg-dark img-responsive" style={Style.jumbotron}>
          <div className="container">
            <h1 className="display-4 text-light text-center">Top Score : {props.topscore}</h1>
            <p className="lead text-light text-center">Try to capture all pokemons. Remember! You can capture a pokemon only once</p>
            <p className="lead text-light text-center">Click on a Pokemon to Begin!</p>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}

export default Jumbotron;