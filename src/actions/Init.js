import {INITIALIZE_CELL_STATE, INITIALIZE_SNAKE, SET_FOOD_LOCATION} from "../constants/Actions"
export const initializeCell = (cellInfo) => dispatch => {
    // // console.log("INITIALIZE",cellInfo)
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

export const setFood = (foodInfo) => dispatch => {
    dispatch({
        type:SET_FOOD_LOCATION,
        payload:foodInfo
    })
}