import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import Cell from "./Cell";

//react reduct connector
import { connect } from "react-redux";
//Selectors for the board
import {
  GameScoreSelector,
  SnakeOverlappedSelector,
  GameStartedSelector
} from "../../../selectors/BoardGameState";
//actions for the board
import { setSnake, setFood } from "../../../actions/Init";
import {
  moveSnake,
  increaseSnake,
  changeSnakeDirection
} from "../../../actions/SnakeActions";

//constants
import Directions from "../../../constants/Directions";
class Board extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      rows: props.size.rows,
      columns: props.size.columns,
      snake: [{ row: 1, column: 2 }, { row: 1, column: 1 }],
      intervalId: null,
      foodPos: { row: 8, column: 2 }
    };
    this.moveSnake = this.moveSnake.bind(this);
    this.growSnake = this.growSnake.bind(this);
    this.generateFood = this.generateFood.bind(this);
    this.startTheGame = this.startTheGame.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    //initializing the board cells start
    const { rows, columns, snake, foodPos } = this.state;
    const totalCells = rows * columns;
    this.cellUnits = [...Array(totalCells)].map((v, idx) => {
      const row = Math.floor(idx / columns);
      const column = idx % columns;
      const foodCell = row === foodPos.row && column === foodPos.column;
      // // console.log("Rendering", idx," Row is",row, "Column is",column);
      return (
        <Cell
          row={row}
          column={column}
          key={idx}
          snake={snake}
          foodCell={foodCell}
        />
      );
    });
    //initializing the board cells end
  }

  moveSnake() {
    // const { columns } = this.state;
    // const newHead = {
    //   row: this.state.snake[0].row,
    //   column: (this.state.snake[0].column + 1) % columns
    // };

    // const snakelength = this.state.snake.length;
    // let newSnake2 = this.state.snake.slice(0, snakelength - 1);

    // newSnake2.unshift(newHead);

    // this.setState({ snake: newSnake2 });
    this.props.moveSnake();
  }
  growSnake() {
    this.generateFood();
    this.props.increaseSnake();
  }
  componentDidMount() {
    //starting game in 10 seconds
    // setTimeout(() => {
    //   this.startTheGame();
    // }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  generateFood() {
    let row = Math.floor(Math.random() * Math.floor(this.state.rows));
    let column = Math.floor(Math.random() * Math.floor(this.state.columns));
    let foodPos = { row, column };
    // // console.log("FOOD POSITION IS", foodPos);
    this.setState({ foodPos });
    this.props.setFood(foodPos);
  }
  startTheGame() {
    //focus the div
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
    //initializing the snake in the redux store starts
    this.props.setSnake(this.state.snake);
    this.props.setFood(this.state.foodPos);
    const intervalId = setInterval(this.moveSnake, 100);
    this.setState({ intervalId: intervalId });
    //initializing the snake in the redux store end
  }

  keyPressed(e) {
    e.stopPropagation();
    
    switch (e.keyCode) {
      case 37:
        //left key pressed
        this.props.changeSnakeDirection(Directions.LEFT);
        break;
      case 39:
        //right key pressed
        this.props.changeSnakeDirection(Directions.RIGHT);
        break;
      case 38:
        //up key pressed
        this.props.changeSnakeDirection(Directions.UP);
        break;
      case 40:
        ///down key pressed
        this.props.changeSnakeDirection(Directions.DOWN);
        break;
      default:
        // DO NOTHING
        break;
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if(this.props.score > prevProps.score)
    this.growSnake()
    if(this.props.started && !prevProps.started)
    this.startTheGame()
  }
  render() {
    return (
      <div className="main-game-board" onKeyDown={this.keyPressed} tabIndex="0" ref="theDiv">
        {this.cellUnits}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  score: GameScoreSelector(state),
  snakeOverlapped: SnakeOverlappedSelector(state),
  started:GameStartedSelector(state)
});
export default connect(
  mapStateToProps,
  { setSnake, setFood, moveSnake, increaseSnake, changeSnakeDirection }
)(Board);
