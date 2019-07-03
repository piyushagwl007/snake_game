import { combineReducers } from "redux-immutable";
import SnakeBoardReducer from "./SnakeBoardReducer/SnakeBoard"
import GameStateReducer from "./GameControls/GameState"
export default combineReducers({
    boardInfo:SnakeBoardReducer,
    gameState:GameStateReducer
});
