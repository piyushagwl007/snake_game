import React, { PureComponent } from "react";
import Cell from "./Cell";
class Board extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      rows: props.size.rows,
      columns: props.size.columns,
      snake:[{row:1,column:1},{row:1,column:2}],
      intervalId:null
    };
    this.moveSnake = this.moveSnake.bind(this);
  }

  moveSnake(){
    const {columns} = this.state
    const newSnake = this.state.snake.map((currentPos) => {
      const newRow = currentPos.row;
      const newColumn = (currentPos.column+1)%columns
      return {row:newRow,column:newColumn}
    })
    // console.log("Updating new snake to ",newSnake)
    this.setState({snake:newSnake})
  }

  componentDidMount(){
    const intervalId = setInterval(this.moveSnake,100)
    this.setState({intervalId:intervalId})
  }

  render() {
    const { rows, columns , snake} = this.state;
    const totalCells = rows * columns;
    console.log("The snake is",snake)
    const cellUnits = [...Array(totalCells)].map((v, idx) => {
      
      const row = Math.floor(idx / columns);
      const column = idx % columns;
      // console.log("Rendering", idx," Row is",row, "Column is",column);
      return <Cell row={row} column={column} key={idx} snake={snake}/>;
    });
    return <div className="main-game-board">{cellUnits}</div>;
  }
}
export default Board;
