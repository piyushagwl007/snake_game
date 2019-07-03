import React, { Component } from "react";
import { connect } from "react-redux";
//actions for the game
import { startGame, stopGame } from "../../../actions/GameActions";
import SharedButton from "../../../shared/littleComponents/SharedButton";
class StartRestart extends Component {
  constructor() {
    super();
    this.startTheGame = this.startTheGame.bind(this);
    this.stopTheGame = this.stopTheGame.bind(this);
  }
  startTheGame() {
    this.props.startGame();
  }
  stopTheGame() {
    this.props.stopGame();
  }
  render() {
    return (
      <div>
        <SharedButton name="Start" action={this.startTheGame} />
      </div>
    );
  }
}

export default connect(
  null,
  { startGame, stopGame }
)(StartRestart);
