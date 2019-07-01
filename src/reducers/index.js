import { combineReducers } from "redux-immutable";
import SnakeBoardReducer from "./SnakeBoardReducer/SnakeBoard"
export default combineReducers({
    boardInfo:SnakeBoardReducer
});
