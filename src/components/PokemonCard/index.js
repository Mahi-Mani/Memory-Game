import React from "react"
import "./style.css"

function PokemonCard(props){

    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} className="img"
          onClick={() => props.randomizeArr(props.id)} className="randomize"></img>
          
        </div>
      </div>
    )
}

export default PokemonCard;

