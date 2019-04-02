import React from "react";

const styles = {
  card: {
    "margin": 20,
    "height": "150px",
    "width": "250px",
    "-webkit-box-shadow": "2px 2px 10px 1px rgba(0,0,0,0.5)",
    "box-shadow": "2px 2px 10px 1px rgba(0,0,0,0.5)"
  },
  img: {
    "height": "150px",
    "width": "250px"
  }
}

function Card(props) {
  return (
    <div style={styles.card}>
        <img style={styles.img} alt={props.name} src={props.image} onClick={() => props.checkRiderId(props.id)} />
    </div>
  );
}

export default Card;