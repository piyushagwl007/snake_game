import React, { PureComponent } from "react";
import { connect } from "react-redux";
//selectors for Score Board
import { GameScoreSelector } from "../../../selectors/BoardGameState";
class ScoreBoard extends PureComponent {
  render() {
    const { score } = this.props;
    return (
      <div className="scoreboard">
        <h3>SCORE: {score} </h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  score: GameScoreSelector(state)
});
export default connect(
  mapStateToProps,
  {}
)(ScoreBoard);
