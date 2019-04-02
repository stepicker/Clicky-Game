import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import riders from "./riders.json";

const styles = {
  riders: {
    "display": "flex",
    "flex-wrap": "wrap",
    "max-width": "900px",
    "margin": "10px auto 10px auto"
  }
};

const winningSound = new Audio('./sounds/ding.mp3');
const losingSound = new Audio('./sounds/sad-trombone.mp3');

class App extends Component {

  state = {
    allRiders: riders.sort(() => { return 0.5 - Math.random() }),
    clickedRiderIds: [],
    score: 0
  };

  youLose = () => {
    console.log("You lose!");
    losingSound.play();
    this.setState({
      allRiders: riders.sort(() => { return 0.5 - Math.random() }),
      clickedRiderIds: [],
      score: 0
    });
  }

  keepClicking = (clickedId) => {
    console.log("Keep clicking!");
    winningSound.play();
    this.setState({
      allRiders: riders.sort(() => { return 0.5 - Math.random() }),
      clickedRiderIds: this.state.clickedRiderIds.concat(clickedId),
      score: this.state.score + 1
    });
  }

  checkRiderId = clickedId => {
    let alreadyClicked = false;
    // Check if the clicked ID had already been clicked
    for (let i of this.state.clickedRiderIds){
      if (i === clickedId) {
        alreadyClicked = true;
      }
    };
    // Lose or keep playing, based on the result of the loop above
    if (alreadyClicked) {
      this.youLose();
    }
    else {
      this.keepClicking(clickedId);
    };
  }

  render() {
    return (
      <div id="main-container">
        <Header score={this.state.score} style={styles.header} />
        <div id="riders" style={styles.riders}>
          {this.state.allRiders.map(rider => (
            <Card
              id={rider.id}
              key={rider.id.toString()}
              name={rider.name}
              image={rider.image}
              checkRiderId={this.checkRiderId}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;