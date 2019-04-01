import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import riders from "./riders.json";

class App extends Component {

  state = {
    allRiders: riders.sort(() => { return 0.5 - Math.random() }),
    clickedRiderIds: [],
    score: 0
  };

  youLose = () => {
    console.log("You lose!");
    this.setState({
      allRiders: riders.sort(() => { return 0.5 - Math.random() }),
      clickedRiderIds: [],
      score: 0
    });
  }

  keepClicking = (clickedId) => {
    console.log("Keep clicking!");
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
        <Header score={this.state.score} />
        <div id="riders">
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