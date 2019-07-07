import React, { PureComponent } from "react";
//react reduct connector
import { connect } from 'react-redux'

//selectors for the cell
import {cellStateSelector} from "../../../selectors/CellStateSelector"

//actions for the cell
import {initializeCell} from "../../../actions/Init"
class Cell extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      row: props.row,
      column: props.column
    };
  }

  
  //Initializing the Cell Component
  componentDidMount(){
    // console.log("COMPONENT MOUNTED")
    const {row, column} = this.props ;
    this.props.initializeCell({row,column})
  }

  render() {
    const { cellState } = this.props;
    return <div className={"cell "+cellState}></div>;
  }
}
const mapStateToProps = (state,props) =>( {
  cellState:cellStateSelector(state,props)
})
export default connect(mapStateToProps,{initializeCell})(Cell)
