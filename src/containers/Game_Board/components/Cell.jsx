import React, { PureComponent } from "react";
import CellStates from "../../../constants/CellStates";
class Cell extends PureComponent {
  constructor(props) {
    super();
    let snakeFound =
      props.snake.findIndex(snakeHead => {
        // if(snakeHead.row == props.row && snakeHead.column === props.column)
        // console.log("HERE==>>",snakeHead.row , props.row,  snakeHead.column, props.column)
        return snakeHead.row === props.row && snakeHead.column === props.column;
      }) > -1;

    this.state = {
      row: props.row,
      column: props.column,
      value: snakeFound ? CellStates.HAVE_SNAKE : props.foodCell?CellStates.HAVE_FOOD:CellStates.HAVE_NOTHING
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //   console.log("The prev props",prevProps)
    let snakeFound =
      this.props.snake.findIndex(snakeHead => {
        return (
          snakeHead.row === this.state.row &&
          snakeHead.column === this.state.column
        );
      }) > -1;
    if (snakeFound) this.setState({ value: CellStates.HAVE_SNAKE });
    else if (this.props.foodCell)
      this.setState({ value: CellStates.HAVE_FOOD });
    else 
      this.setState({ value: CellStates.HAVE_NOTHING });
  }

  render() {
    const { value } = this.state;
    return <div className="cell">{value}</div>;
  }
}

export default Cell;
