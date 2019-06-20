import React, { Component } from "react";
import "./App.css";

//External Components
import Board from "./containers/Game_Board";
const size = {
  rows: 20,
  columns: 20
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Board board_size={size} />
      </div>
    );
  }
}

export default App;
