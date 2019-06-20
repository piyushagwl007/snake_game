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
    const { rows, columns } = this.state;
    const totalCells = rows * columns;
    const cellUnits = [...Array(totalCells)].map((v, idx) => {
      console.log("Rendering", idx);
      const row = idx % rows;
      const column = idx % columns;
      return <Cell row={row} column={column} key={idx}/>;
    });
    return <div className="main-game-board">{cellUnits}</div>;
  }
}
export default Board;
