import {INITIALIZE_CELL_STATE} from "../constants/Actions"
export const initializeCell = (cellInfo) => dispatch => {
    dispatch({
        type:INITIALIZE_CELL_STATE,
        payload:cellInfo
    })
}