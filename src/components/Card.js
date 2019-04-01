import React from "react";

function Card(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} onClick={() => props.checkRiderId(props.id)} />
    </div>
  );
}

export default Card;