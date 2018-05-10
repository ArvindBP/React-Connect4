import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
// import Gamescreen from '../connect4_gs/gamescreen';
import About from './about';
import Board from '../connect4_gs/board';
import Heading from './heading';
import Input from './input';
import Scoreboard from './scoreboard';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            column_no: [-1, -1, -1, -1, -1, -1, -1],
            xisNext: true,
            grid: [
                [],
                [],
                [],
                [],
                [],
                []
            ],
            winner_set: false,
            winner: null,
            history:[],
            player:'',
            moves:0,
        }
        this.changedata = this.changedata.bind(this);
        this.calculatewinner_hori = this.calculatewinner_hori.bind(this);
        this.calculatewinner_vert = this.calculatewinner_vert.bind(this);
        this.calculatewinner_diag1 = this.calculatewinner_diag1.bind(this);
        this.calculatewinner_diag2 = this.calculatewinner_diag2.bind(this);
        this.calculatewinner_diag3 =this.calculatewinner_diag3.bind(this);
        this.calculatewinner_diag4 =this.calculatewinner_diag4.bind(this);
        this.restart_game =this.restart_game.bind(this);
        this.maninput = this.maninput.bind(this);
    }
    maninput(a){
        
        this.state.player = a;
        this.setState({
          player:this.state.player,
        })
        
    }
    changedata(i) {
        
        if(this.state.xisNext==true)
            this.state.moves++;
        
        this.state.column_no[i]++;
        if (this.state.xisNext == true)
            this.state.grid[this.state.column_no[i]][i] = 'X';
        else
            this.state.grid[this.state.column_no[i]][i] = 'O';

        this.calculatewinner_hori();
        this.calculatewinner_vert();
        this.calculatewinner_diag1();
        this.calculatewinner_diag2();
        this.calculatewinner_diag3();
        this.calculatewinner_diag4();

        if(this.state.winner_set==true && this.state.winner=="X")
        {
          let obj = {};
          obj.player_name = this.state.player;
          obj.moves = this.state.moves;
          this.state.history.push(obj);

          var his = JSON.parse(localStorage.getItem("leaderboard1")) || [];
          his.push(obj);
          localStorage.setItem("leaderboard1", JSON.stringify(his));
        }
        this.setState({
            column_no: this.state.column_no,
            grid: this.state.grid,
            xisNext: !this.state.xisNext,
            winner_set: this.state.winner_set,
            winner: this.state.winner,
            moves:this.state.moves,
            history:this.state.history,
        })


        console.log(this.state);
        
    }
    restart_game()
    {
        
        this.setState(
          {
            column_no: [-1, -1, -1, -1, -1, -1, -1],
            xisNext: true,
            grid: [
                [],
                [],
                [],
                [],
                [],
                []
            ],
            winner_set: false,
            winner: null,
            history:this.state.history,
            player:'',
            moves:0,

        }
        )

    }
    calculatewinner_diag3(){
          
          let count1 = 0,
            count2 = 0;
        for(let m1=2;m1>=0;m1--)
        {
          let n1=m1;
          let i=6;
          while(n1<=5)
          {  if(this.state.grid[n1][i] == 'X')
            {
              count1++;
              count2=0;
            }
            else if (this.state.grid[n1][i] == 'O') 
            {
              count2++;
              count1=0;
            } 
            else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }      
              i--;
              n1++;
          }
        }
    }
    calculatewinner_diag4(){
      let count1 = 0,
            count2 = 0;
        for(let m1=5;m1>=3;m1--)
        {
          let n1=m1;
          let i=0;
          while(n1>=0)
          {  if(this.state.grid[i][n1] == 'X')
            {
              count1++;
              count2=0;
            }
            else if (this.state.grid[i][n1] == 'O') 
            {
              count2++;
              count1=0;
            } 
            else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }      
              i++;
              n1--;
          }
        }
    }
      
    calculatewinner_diag1(){
        
        let count1 = 0,
            count2 = 0;
        for(let m1=0;m1<3;m1++)
        {
          let n1=0;
          let i=m1;
          while(i<=5)
          {  if(this.state.grid[i][n1] == 'X')
            {
              count1++;
              count2=0;
            }
            else if (this.state.grid[i][n1] == 'O') 
            {
              count2++;
              count1=0;
            } 
            else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }      
              i++;
              n1++;
          }
        }
    }
    calculatewinner_diag2(){
        
        let count1 = 0,
            count2 = 0;
        for(let m1=1;m1<4;m1++)
        {
          let n1=m1;
          let i=0;
          while(i<=5)
          {  if(this.state.grid[i][n1] == 'X')
            {
              count1++;
              count2=0;
            }
            else if (this.state.grid[i][n1] == 'O') 
            {
              count2++;
              count1=0;
            } 
            else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }      
              i++;
              n1++;
          }
        }
    }
    
    calculatewinner_vert() {
        let count1 = 0,
            count2 = 0;
        for (let z = 0; z < 7; z++) {
            for (let y = 0; y < 6; y++) {
                if (this.state.grid[y][z] == 'X') {
                    count1++;
                    count2 = 0;
                } else if (this.state.grid[y][z] == 'O') {
                    count2++;
                    count1 = 0;
                } else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }
            }
        }
        

    }
    calculatewinner_hori() {
        let count1 = 0,
            count2 = 0;
        for (let z = 0; z < 6; z++) {
            for (let y = 0; y < 7; y++) {
                if (this.state.grid[z][y] == 'X') {
                    count1++;
                    count2 = 0;
                } else if (this.state.grid[z][y] == 'O') {
                    count2++;
                    count1 = 0;
                } else {
                    count1 = 0;
                    count2 = 0;
                }

                if (count1 >= 4) {
                    this.state.winner = 'X'
                    this.state.winner_set = true;
                }
                if (count2 >= 4) {
                    this.state.winner = 'O'
                    this.state.winner_set = true;
                }
            }
        }

    }
  render() {
    let status;
    let abc = this.state.player;
    if(this.state.winner_set==false)
      if(this.state.xisNext==true)
         status ="Next Player:"+abc+"(X)";
      else
         status = "Next Player:O";
    else
      if(this.state.winner == 'X')
        status ="Winner:X";
      else
        status="Winner:O";
    return (
      <HashRouter>
    	<div>
    	<Heading/>

      <ul className="header">
            <li><NavLink exact to="/">About the Game and Rules</NavLink></li>
            <li><NavLink to="/board">Board</NavLink></li>
            <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
      </ul>
      <div className="content">
            <Route exact path='/' render = {() => <div> <About/>  <Input status={status} maninput={this.maninput}  /></div> }/>
            <div className="game">  
                  <div className="game-board">
                          <Route exact path='/board' render = {() => <div> {status} <Board state1={this.state} changedata={this.changedata}/> <button onClick={this.restart_game}>Restart Game </button> </div>}/>
                  </div>
            </div>
            <Route exact path='/leaderboard' render = {() => <Scoreboard state5 = {this.state} />}/>
      </div>
       
     </div>
     </HashRouter> 
    );
  }
}

export default App;
