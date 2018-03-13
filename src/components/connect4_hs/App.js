import React, { Component } from 'react';
import './App.css';
// import Gamescreen from '../connect4_gs/gamescreen';
import Board from '../connect4_gs/board';
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
        }
        this.changedata = this.changedata.bind(this);
        this.calculatewinner_hori = this.calculatewinner_hori.bind(this);
        this.calculatewinner_vert = this.calculatewinner_vert.bind(this);
        this.calculatewinner_diag1 = this.calculatewinner_diag1.bind(this);
        this.calculatewinner_diag2 = this.calculatewinner_diag2.bind(this);
        this.calculatewinner_diag3 =this.calculatewinner_diag3.bind(this);
        this.calculatewinner_diag4 =this.calculatewinner_diag4.bind(this);
        
    }
    changedata(i) {
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

        this.setState({
            column_no: this.state.column_no,
            grid: this.state.grid,
            xisNext: !this.state.xisNext,
            winner_set: this.state.winner_set,
            winner: this.state.winner,
        })
        console.log(this.state);
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
    let status
    if(this.state.winner_set==false)
      if(this.state.xisNext==true)
         status ="Next Player:X";
      else
         status = "Next Player:O";
    else
      if(this.state.winner == 'X')
        status ="Winner:X";
      else
        status="Winner:O";
    return (
    	<div>
    	<h2 className="welcome_heading">Welcome to Connect-4</h2>
      {status}
    	<div className="game">	
    		<div className="game-board">
          		<Board state1={this.state} changedata={this.changedata}/>
        	</div>
        </div>
        </div>
    );
  }
}

export default App;
