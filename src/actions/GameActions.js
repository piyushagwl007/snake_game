import { START_THE_GAME, STOP_THE_GAME } from "../constants/Actions";
export const startGame = () => dispatch => {
  dispatch({
    type: START_THE_GAME
  });
};
export const stopGame = () => dispatch => {
  dispatch({
    type: STOP_THE_GAME
  });
};
