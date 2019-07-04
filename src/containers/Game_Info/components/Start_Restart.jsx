import React, { Component } from "react";
import { connect } from "react-redux";
//actions for the game
import { startGame, stopGame } from "../../../actions/GameActions";
import SharedButton from "../../../shared/littleComponents/SharedButton";

//selectors for the StartRestart
import {
  GameStartedSelector,
  SnakeOverlappedSelector
} from "../../../selectors/BoardGameState";
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
  componentDidUpdate(prevProps, prevState) {
    if (this.props.snakeOverlapped && !prevProps.snakeOverlapped) {
      setTimeout(() => {
        this.stopTheGame();
      }, 2000);
    }
  }
  render() {
    return (
      <div>
        <SharedButton name="Start" action={this.startTheGame} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  started: GameStartedSelector(state),
  snakeOverlapped: SnakeOverlappedSelector(state)
});
export default connect(
  mapStateToProps,
  { startGame, stopGame }
)(StartRestart);
