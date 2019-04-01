import React from "react";

function Header(props) {
    return(
        <header>
            <h1>MotoGP Clicky Game!</h1>
            <h2>Score: {props.score}</h2>
        </header>
    )
}

export default Header;