import React, { Component } from 'react';
import './App.css';
import Score from './Score';

class App extends Component {

  state = {
    board: Array(9).fill(null),
    player: 'X',
    scoreX: 0,
    scoreY: 0
  }

  handleClick = index => {
    let updBoard = this.state.board;

    if (updBoard[index] === null) {
      const updScoreX = this.state.scoreX;
      const updScoreY = this.state.scoreY;
      updBoard[index] = this.state.player;
      let updPlayer = (this.state.player === 'X') ? 'O' : 'X';

      this.setState({
        board: updBoard,
        player: updPlayer,
        scoreX: updScoreX,
        scoreY: updScoreY
      });
    };
  }

  showResults = () => {
    const winningMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];
    const actualBoard = this.state.board;

    for (let i = 0; i < winningMatch.length; i++) {
      const fr = winningMatch[i][0];
      const sec = winningMatch[i][1];
      const th = winningMatch[i][2];

      if (actualBoard[fr] === actualBoard[sec] && actualBoard[fr] === actualBoard[th] && actualBoard[fr] != null) {
        let updatedScoreX = this.state.scoreX;
        let updatedScoreY = this.state.scoreY;
        const newBoard = Array(9).fill(null);
        const newPlayer = 'X';

        if (actualBoard[fr] === 'X') {
          updatedScoreX++;
        } else {
          updatedScoreY++;
        }

        this.setState({
          board: newBoard,
          player: newPlayer,
          scoreX: updatedScoreX,
          scoreY: updatedScoreY
        });

      };
    };
  }

  resetButtonHandler = () => {
    const newBoard = Array(9).fill(null);
    const newPlayer = 'X';
    this.setState({
      board: newBoard,
      player: newPlayer,
      scoreX: this.state.scoreX,
      scoreY: this.state.scoreY
    });
  }

  resetScoreHandler = () => {
    const newBoard = Array(9).fill(null);
    const newPlayer = 'X';
    this.setState({
      board: newBoard,
      player: newPlayer,
      scoreX: 0,
      scoreY: 0
    });
  }

  render() {
    const box = this.state.board.map((box, index) => <div className='box' key={index} onClick={() => this.handleClick(index)}>{box}</div>)
    return (
      <React.Fragment>
        <div className="tag">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="container">
          <div className="board" onClick={this.showResults}>
            {box}
          </div>
        </div>
        <button className='resetButton' onClick={this.resetButtonHandler}>Reset board</button>
        <Score
          scoreX={this.state.scoreX}
          scoreY={this.state.scoreY}
        />
        <button className='resetScore' onClick={this.resetScoreHandler}>Reset score</button>
      </React.Fragment>

    );
  }
}

export default App;
