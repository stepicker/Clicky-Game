import React from "react";

const styles = {
    header: {
        "background-color": "#209cee",
        "padding": "10px",
        "display": "flex",
        "justify-content": "center"
    },
    info: {
        "margin": "5px 20px",
        "color": "white",
        "font-family": "'Noto Sans KR', sans-serif"
    }
}

function Header(props) {
    return(
        <header style={styles.header}>
            <h2 style={styles.info}>MotoGP Clicky Game!</h2>
            <h2 style={styles.info}>Score: {props.score}</h2>
        </header>
    )
}

export default Header;