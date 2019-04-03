import React, { Component } from "react";

class Card extends Component {

  state = {hover: false};

  handleMouseHover = () => {
    this.setState({hover: !this.state.hover});
  }

  render() {

    const styles = {
      card: {
        margin: 20,
        height: "150px",
        width: "250px",
        WebkitBoxShadow: "2px 2px 10px 1px rgba(0,0,0,0.5)",
        boxShadow: "2px 2px 10px 1px rgba(0,0,0,0.5)"
      },
      img: {
        height: "150px",
        width: "250px",
        opacity: !this.state.hover ? 1.0 : 0.6,
        cursor: !this.state.hover ? "" : "pointer",
      }
    }

    return (
      <div style={styles.card}>
          <img style={styles.img} alt={this.props.name} src={this.props.image} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={() => this.props.checkRiderId(this.props.id)} />
      </div>
    );

  }

}

export default Card;