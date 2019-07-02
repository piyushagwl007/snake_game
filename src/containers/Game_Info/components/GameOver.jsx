import React, { Component } from "react";
import { connect } from "react-redux";
import { SnakeOverlappedSelector } from "../../../selectors/BoardGameState";
class GameOver extends Component {
  render() {
    const { over } = this.props;
    return (
      <div>
        {!over && <h3> GAME RUNNING</h3>}
        {over && <h1>###### GAME OVER #####</h1>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  over: SnakeOverlappedSelector(state)
});

export default connect(
  mapStateToProps,
  {}
)(GameOver);
