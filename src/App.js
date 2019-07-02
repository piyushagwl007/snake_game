import React, { Component } from "react";
import "./App.css";

//Adding Redux Store
import { Provider } from "react-redux";
import redux_store from "./redux_store";
//External Components
import Board from "./containers/Game_Board";
import GameInfo from "./containers/Game_Info";
const size = {
  rows: 20,
  columns: 20
};
class App extends Component {
  render() {
    return (
      <Provider store={redux_store}>
        <div className="App">
          <Board board_size={size} />
          <GameInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
