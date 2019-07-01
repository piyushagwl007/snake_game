import { fromJS } from "immutable";
import {
  INITIALIZE_CELL_STATE,
  INITIALIZE_SNAKE
} from "../../constants/Actions";
import CellStates from "../../constants/CellStates";
const initialState = fromJS({
  snake: [],
  cellMatrix: [],
  foodPos: { row: null, column: null }
});

export default function(state = initialState, action) {
  switch (action.type) {

    case INITIALIZE_CELL_STATE:
      const { row, column } = action.payload;
      return state.setIn(["cellMatrix", row, column], CellStates.HAVE_NOTHING);


    case INITIALIZE_SNAKE:
      const snakeData = fromJS(action.payload);
      for (let i = 0; i < action.payload.length; i++) {
        console.log("Initializing at ",action.payload[i])
        state = state.setIn(["cellMatrix",action.payload[i].row,action.payload[i].column],CellStates.HAVE_SNAKE)
      }
      return state.setIn(["snake"], snakeData);


    default:
      return state;
  }
}
