import React from 'react';
export default class Input extends React.Component{
	constructor(props)
	{
		super(props);
		this.getinput =this.getinput.bind(this);
	}
	getinput(){
		let a =  document.getElementById("player_name").value;
		this.props.maninput(a);
	}
	render(){
		return (

			<div>
				<input type="text" id="player_name" placeholder="Enter your name"/>
				<button onClick={()=>this.getinput()}>Submit</button>
			</div>
		)
	}
}