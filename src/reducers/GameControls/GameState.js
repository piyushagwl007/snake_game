import { fromJS } from "immutable";
import { START_THE_GAME, STOP_THE_GAME } from "../../constants/Actions";
const initialState = fromJS({
  gameStarted: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case START_THE_GAME:
      return state.set("gameStarted", true);
    case STOP_THE_GAME:
      return state.set("gameStarted", false);
    default:
      return state;
  }
}
