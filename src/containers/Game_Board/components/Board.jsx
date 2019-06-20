import React, { PureComponent } from "react";
import Cell from "./Cell";
class Board extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      rows: props.size.rows,
      columns: props.size.columns,
      snake: [{ row: 1, column: 2 }, { row: 1, column: 1 }],
      intervalId: null
    };
    this.moveSnake = this.moveSnake.bind(this);
    this.growSnake = this.growSnake.bind(this);
  }

  moveSnake() {
    const { columns } = this.state;
    const newHead = {
      row: this.state.snake[0].row,
      column: (this.state.snake[0].column + 1) % columns
    };

    const snakelength = this.state.snake.length;
    let newSnake2 = this.state.snake.slice(0, snakelength - 1);

    newSnake2.unshift(newHead);

    this.setState({ snake: newSnake2 });
  }
  growSnake() {
    const newSnake = this.state.snake.concat([this.state.snake[0]]);

    this.setState({ snake: newSnake });
  }
  componentDidMount() {
    const intervalId = setInterval(this.moveSnake,100)
    this.setState({intervalId:intervalId})
  }

  render() {
    const { rows, columns, snake } = this.state;
    const totalCells = rows * columns;
    const cellUnits = [...Array(totalCells)].map((v, idx) => {
      const row = Math.floor(idx / columns);
      const column = idx % columns;
      // console.log("Rendering", idx," Row is",row, "Column is",column);
      return <Cell row={row} column={column} key={idx} snake={snake} />;
    });
    return (
      <div className="main-game-board" onDoubleClick={this.growSnake}>
        {cellUnits}
      </div>
    );
  }
}
export default Board;
