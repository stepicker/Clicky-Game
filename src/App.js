import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import riders from "./riders.json";
import swal from 'sweetalert';

const styles = {
  riders: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "900px",
    margin: "10px auto 10px auto"
  }
};

const scoringSound = new Audio("./sounds/ding.mp3");
const winningSound = new Audio("./sounds/ta-da.mp3");
const losingSound = new Audio("./sounds/sad-trombone.mp3");

class App extends Component {

  state = {
    allRiders: riders.sort(() => { return 0.5 - Math.random() }),
    clickedRiderIds: [],
    score: 0
  };

  resetScore = () => {
    this.setState({
      allRiders: riders.sort(() => { return 0.5 - Math.random() }),
      clickedRiderIds: [],
      score: 0
    });
  }

  youLose = () => {
    // Acknowledge the loss, and reset the state
    console.log("You lose!");
    losingSound.play();
    this.resetScore();
    swal({
      title: "Nope...",
      text: "You have already clicked that one. Try again!",
      icon: "error",
    });
  }

  youWin = () => {
    // Acknowledge the win, then reset the state
    console.log("You win!");
    winningSound.play();
    this.resetScore();
    swal({
      title: "Whoohoo!!",
      text: "You got all nine riders! Click OK to play again.",
      icon: "success",
    });
  }

  keepClicking = (clickedId) => {
    // Acknowledge the point gained, and update the state accordingly
    console.log("Keep clicking!");
    scoringSound.play();
    const oldScore = this.state.score;
    const newScore = oldScore + 1;
    if (newScore === 9) {
      this.youWin();
    }
    else {
      this.setState({
        allRiders: riders.sort(() => { return 0.5 - Math.random() }),
        clickedRiderIds: this.state.clickedRiderIds.concat(clickedId),
        score: newScore
      });
    }
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
    console.log("Clicked so far: ", this.state.clickedRiderIds);
    return (
      <div id="main-container">
        <Header score={this.state.score} />
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