import { fromJS } from "immutable";
import { INITIALIZE_CELL_STATE } from "../../constants/Actions";
import CellStates from "../../constants/CellStates"
const initialState = fromJS({
  snake: [],
  cellMatrix: [],
  foodPos: { row: null, column: null }
});

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CELL_STATE:
      const { row, column } = action.payload;
    return  state.setIn([row,column],CellStates.HAVE_NOTHING)
      break
    default:
      return state;
  }
}
