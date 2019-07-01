import { MOVE_SNAKE, INCREASE_SNAKE_LENGTH } from "../constants/Actions";
export const moveSnake = () => dispatch => {
  dispatch({
    type: MOVE_SNAKE
  });
};

export const increaseSnake = () => dispatch => {
  dispatch({
    type: INCREASE_SNAKE_LENGTH
  });
};
