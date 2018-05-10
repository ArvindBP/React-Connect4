import React from 'react';
export default class Scoreboard extends React.Component{
	constructor(props)
	{
		super(props);
		this.disphis = this.disphis.bind(this);
		this.disphisfromlocal = this.disphisfromlocal.bind(this);
	}
	render(){
		return (
			<div>
			{this.disphisfromlocal()}<br />
			</div> 
		);
	}

	disphis(){

		let a="";
		for(let i=0;i<this.props.state5.history.length;i++)
		{
			a+=`Name of the player:${this.props.state5.history[i].player_name} Number of moves:${this.props.state5.history[i].moves}`;
		}
		return a;
	}
	disphisfromlocal(){
		var his = JSON.parse(localStorage.getItem("leaderboard1"));
		let a="";
		if(his!=null)
		{
		for(let i=0;i<his.length;i++)
		{
			a+=`Name of the player:${his[i].player_name}  Number of moves:${his[i].moves} `;
		}
		}
		return a;
	}

}