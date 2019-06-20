import React, { PureComponent } from "react";
import CellStates from "../../../constants/CellStates";
class Cell extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      row: props.row,
      column: props.column,
      value: CellStates.HAVE_NOTHING
    };
  }
  render() {
    const { value } = this.state;
    return <div className="cell">{value}</div>;
  }
}

export default Cell;
