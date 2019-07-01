import {createSelector} from 'reselect'

const selectCellState = (state,props) =>  state.getIn(['boardInfo','cellMatrix',props.row,props.column])

export const cellStateSelector = createSelector(selectCellState,substate => substate)