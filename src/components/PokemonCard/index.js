import React from "react"
import "./style.css"

function PokemonCard(props){
    const styles = {
        width: "250px"
    }
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} style={styles.width}/>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default PokemonCard;

