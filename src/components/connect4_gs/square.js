import React from 'react';
export default class Square extends React.Component {
  render() {
    return (
      <div className="square">
        	{this.props.state2.grid[this.props.row_is][this.props.col_is]}
      </div>
    );
  }
}