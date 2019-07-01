import { MOVE_SNAKE, INCREASE_SNAKE_LENGTH, CHANGE_SNAKE_DIRECTION } from "../constants/Actions";
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


export const changeSnakeDirection = (direction) => dispatch => {
  dispatch({
    type:CHANGE_SNAKE_DIRECTION,
    payload:direction
  })
}