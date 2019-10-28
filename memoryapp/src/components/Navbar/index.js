import React from "react";

function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <nav className="navbar navbar-dark bg-dark shadow-lg p-3 mb-5 bg-dark rounded text-center">
                    <div className="container">
                        <h1 className="display-4 text-light text-center">{props.value}</h1>
                    </div>
                </nav>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Navbar;