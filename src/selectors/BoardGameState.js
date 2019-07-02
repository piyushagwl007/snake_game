import { createSelector } from "reselect";

const selectGameScore = state => state.getIn(["boardInfo", "score"]);
const selectSnakeOverlapped = state =>
  state.getIn(["boardInfo", "snakeOverlapped"]);

export const GameScoreSelector = createSelector(
  selectGameScore,
  substate => substate
);

export const SnakeOverlappedSelector = createSelector(
  selectSnakeOverlapped,
  substate => substate
);
