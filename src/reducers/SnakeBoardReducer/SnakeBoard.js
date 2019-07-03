import { fromJS } from "immutable";
import {
  INITIALIZE_CELL_STATE,
  INITIALIZE_SNAKE,
  SET_FOOD_LOCATION,
  MOVE_SNAKE,
  INCREASE_SNAKE_LENGTH,
  CHANGE_SNAKE_DIRECTION
} from "../../constants/Actions";
import CellStates from "../../constants/CellStates";
import Directions from "../../constants/Directions";
import {
  getMod,
  checkIfSnakeOverlapped,
  getNewFoodLocation
} from "../../utility/helpFunctions";
const initialState = fromJS({
  snake: [],
  cellMatrix: [],
  foodPos: { row: null, column: null },
  direction: Directions.RIGHT.value,
  score: 0,
  snakeOverlapped: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CELL_STATE:
      const { row, column } = action.payload;
      return state.setIn(["cellMatrix", row, column], CellStates.HAVE_NOTHING);

    case INITIALIZE_SNAKE:
      const snakeData = fromJS(action.payload);
      for (let i = 0; i < action.payload.length; i++) {
        // console.log("Initializing at ",action.payload[i])
        state = state.setIn(
          ["cellMatrix", action.payload[i].row, action.payload[i].column],
          CellStates.HAVE_SNAKE
        );
      }
      return state.setIn(["snake"], snakeData);

    case SET_FOOD_LOCATION:
      let foodLocation = getNewFoodLocation(state.get("snake"),action.payload)
      
      return state
        .setIn(["foodPos", "row"], foodLocation.row)
        .setIn(["foodPos", "column"], foodLocation.column)
        .setIn(["cellMatrix", foodLocation.row, foodLocation.column], CellStates.HAVE_FOOD);

    case MOVE_SNAKE:
      //DO NOT MOVE SNAKE IF SNAKE OVERLAPPED
      if (state.get("snakeOverlapped")) return state;

      const snakeHeadRow = state.getIn(["snake", 0, "row"]);
      const snakeHeadColumn = state.getIn(["snake", 0, "column"]);
      const snakeTailRow = state
        .get("snake")
        .last()
        .get("row");
      const snakeTailColumn = state
        .get("snake")
        .last()
        .get("column");
      const moveHeadPosition = Directions[state.getIn(["direction"])];
      const newHead = {
        row: getMod(snakeHeadRow + moveHeadPosition.row, 20),
        column: getMod(snakeHeadColumn + moveHeadPosition.column, 20)
      };
      // console.log("The snake tail info",snakeTailRow,snakeTailColumn,"The snake tail had",state.getIn(["cellMatrix",snakeTailRow,snakeTailColumn]))
      //checking if overlap is there because of snake
      if (checkIfSnakeOverlapped(state.get("snake"), newHead))
        return state.setIn(["snakeOverlapped"], true);

      if (
        state.getIn(["foodPos", "row"]) === newHead.row &&
        state.getIn(["foodPos", "column"]) === newHead.column
      )
        state = state.updateIn(["score"], score => score + 10);

      return state
        .setIn(
          ["cellMatrix", newHead.row, newHead.column],
          CellStates.HAVE_SNAKE
        )
        .setIn(
          ["cellMatrix", snakeTailRow, snakeTailColumn],
          CellStates.HAVE_NOTHING
        )
        .updateIn(["snake"], snake => snake.pop().unshift(fromJS(newHead)));

    case INCREASE_SNAKE_LENGTH:
      return state.updateIn(["snake"], snake =>
        snake.push(fromJS(snake.last().toJS()))
      );

    case CHANGE_SNAKE_DIRECTION:
      if (Directions[action.payload.value].reverse === state.get("direction"))
        return state;
      return state.set("direction", action.payload.value);
    default:
      return state;
  }
}
