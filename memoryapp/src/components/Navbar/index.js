import React from "react";

function Navbar(props) {
  const navStyle = {
    nav: {
      // "position": "fixed"
      
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-dark bg-dark mb-7 bg-dark fixed-top text-center"
          style={navStyle.nav}>
          <div className="container">
            <h1 className="display-4 text-light text-center ml-0">{props.value}</h1>
            <h1 className="display-4 text-light text-center mr-0">Score: {props.score}</h1>
            <h1 className="display-4 text-light text-center mr-0">Topscore: {props.topscore}</h1>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;