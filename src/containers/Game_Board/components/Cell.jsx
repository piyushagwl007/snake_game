import React, { PureComponent } from "react";
import CellStates from "../../../constants/CellStates";
class Cell extends PureComponent {
  constructor(props) {
    super();
    let snakeFound = props.snake.findIndex((snakeHead)=>{
        if(snakeHead.row == props.row && snakeHead.column === props.column)
        console.log("HERE==>>",snakeHead.row , props.row,  snakeHead.column, props.column)
         return snakeHead.row == props.row && snakeHead.column === props.column
        }) >-1;
    
    this.state = {
      row: props.row,
      column: props.column,
      value: snakeFound?CellStates.HAVE_SNAKE:CellStates.HAVE_NOTHING
    };
  }
  
  render() {
    const { value } = this.state;
    return <div className="cell">{value}</div>;
  }
}

export default Cell;
