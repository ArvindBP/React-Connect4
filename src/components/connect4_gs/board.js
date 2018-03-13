import Square from './square.js';
import React from 'react';
import './board.css';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.changedata1 = this.changedata1.bind(this);
  }
  
  renderSquare(i,j) {
    return <Square row_is={i} col_is={j} state2={this.props.state1} />;
  }
  renderAdd(i){
    return <button onClick={()=>this.changedata1(i)}>Add to column {i}</button>
    
  }
  changedata1(i){
      this.props.changedata(i); 
  }
  
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderAdd(0)}
          {this.renderAdd(1)}
          {this.renderAdd(2)}
          {this.renderAdd(3)}
          {this.renderAdd(4)}
          {this.renderAdd(5)}
          {this.renderAdd(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(5,0)}
          {this.renderSquare(5,1)}
          {this.renderSquare(5,2)}
          {this.renderSquare(5,3)}
          {this.renderSquare(5,4)}
          {this.renderSquare(5,5)}
          {this.renderSquare(5,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(4,0)}
          {this.renderSquare(4,1)}
          {this.renderSquare(4,2)}
          {this.renderSquare(4,3)}
          {this.renderSquare(4,4)}
          {this.renderSquare(4,5)}
          {this.renderSquare(4,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,0)}
          {this.renderSquare(3,1)}
          {this.renderSquare(3,2)}
          {this.renderSquare(3,3)}
          {this.renderSquare(3,4)}
          {this.renderSquare(3,5)}
          {this.renderSquare(3,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(2,0)}
          {this.renderSquare(2,1)}
          {this.renderSquare(2,2)}
          {this.renderSquare(2,3)}
          {this.renderSquare(2,4)}
          {this.renderSquare(2,5)}
          {this.renderSquare(2,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(1,0)}
          {this.renderSquare(1,1)}
          {this.renderSquare(1,2)}
          {this.renderSquare(1,3)}
          {this.renderSquare(1,4)}
          {this.renderSquare(1,5)}
          {this.renderSquare(1,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(0,1)}
          {this.renderSquare(0,2)}
          {this.renderSquare(0,3)}
          {this.renderSquare(0,4)}
          {this.renderSquare(0,5)}
          {this.renderSquare(0,6)}
        </div>
       </div>
    );
  }
}