import React from "react";

function PokemonCard(props) {
  const Style = {
    img: {
      width: "200px",
      height: "200px",
      border: "5px solid black"
    },
    imgContainer: {
      padding: "5px"
    }
  }

  return (
    <>
      <div className="row d-inline-flex flex-row mt-5">
        <div className="col-md-2"></div>

        <div className="col-md-8  d-inline-flex flex-row">
          <div className="imgContainer" style={Style.imgContainer}>
            <img alt={props.name} src={props.image} className="img d-inline-flex flex-row" style={Style.img}
              onClick={() => props.randomizeArr(props.id)} className="randomize"></img>
          </div>
        </div>
        <div className="col-md-2"></div>

      </div>
    </>
  )
}

export default PokemonCard;

