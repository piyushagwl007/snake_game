import React, { PureComponent } from "react";
import Cell from "./Cell";
class Board extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      rows: props.size.rows,
      columns: props.size.columns
    };
  }

  render() {
    const snake = [{row:1,column:1},{row:1,column:2}]
    const { rows, columns } = this.state;
    const totalCells = rows * columns;
    const cellUnits = [...Array(totalCells)].map((v, idx) => {
      
      const row = Math.floor(idx / columns);
      const column = idx % columns;
      console.log("Rendering", idx," Row is",row, "Column is",column);
      return <Cell row={row} column={column} key={idx} snake={snake}/>;
    });
    return <div className="main-game-board">{cellUnits}</div>;
  }
}
export default Board;
