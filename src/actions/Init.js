import {INITIALIZE_CELL_STATE, INITIALIZE_SNAKE} from "../constants/Actions"
export const initializeCell = (cellInfo) => dispatch => {
    dispatch({
        type:INITIALIZE_CELL_STATE,
        payload:cellInfo
    })
}

export const setSnake = (snakeInfo) => dispatch => {
    dispatch({
        type:INITIALIZE_SNAKE,
        payload:snakeInfo
    })
}