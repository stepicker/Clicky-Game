import React from "react";

const styles = {
    header: {
        backgroundColor: "#209cee",
        padding: "10px",
        display: "flex",
        justifyContent: "center"
    },
    info: {
        margin: "5px 20px",
        color: "white",
        fontFamily: "'Noto Sans KR', sans-serif"
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