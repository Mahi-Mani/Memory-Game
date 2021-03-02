import React from "react";
import Background from '../../images/bg2.jpg';
// import "./style.css"

function Wrapper(props) {
  const Style = {
    jumbotron: {
      backgroundImage: `url(${Background})`
    }
  }

    return <div className = "wrapper" style={Style.jumbotron}>{props.children}</div>;
}

export default Wrapper;

