import React, { Component } from 'react';
import './../styles/Board.css';
import Score from './Score';
import LoadingBar from './LoadingBar';

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill(null),
      player: 'x',
      scoreX: 0,
      scoreY: 0,
      won: null,
      clicksNeeded: 0,
      singlePlayer: this.props.singlePlayer,
      exit: false
    };
  }

  handleClick = index => {
    let updBoard = this.state.board;

    if (updBoard[index] === null) {
      const updScoreX = this.state.scoreX;
      const updScoreY = this.state.scoreY;
      updBoard[index] = this.state.player;
      let updPlayer = (this.state.player === 'x') ? 'o' : 'x';

      this.setState({
        board: updBoard,
        player: updPlayer,
        scoreX: updScoreX,
        scoreY: updScoreY,
        won: null,
        clicksNeeded: 0
      });
    };
  }

  handleSingleModeClick = index => {
    let updBoard = this.state.board;

    if (updBoard[index] === null) {
      const updScoreX = this.state.scoreX;
      const updScoreY = this.state.scoreY;
      updBoard[index] = this.state.player;
      while (true) {
        if (this.state.clicksNeeded % 4 === 0 && this.state.clicksNeeded !== 0) {
          break;
        }
        let randIndex = Math.floor(Math.random() * updBoard.length)
        if (updBoard[randIndex] === null) {
          updBoard[randIndex] = 'o';
          break;
        }
      }

      this.setState({
        board: updBoard,
        player: 'x',
        scoreX: updScoreX,
        scoreY: updScoreY,
        won: null,
        clicksNeeded: this.state.clicksNeeded + 1
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
    let seenX = false;
    let seenO = false;

    let updatedScoreX = this.state.scoreX;
    let updatedScoreY = this.state.scoreY;
    const newBoard = Array(9).fill(null);
    const newPlayer = 'x';

    for (let i = 0; i < winningMatch.length; i++) {
      const fr = winningMatch[i][0];
      const sec = winningMatch[i][1];
      const th = winningMatch[i][2];

      if (actualBoard[fr] === actualBoard[sec] && actualBoard[fr] === actualBoard[th] && actualBoard[fr] != null) {

        if (actualBoard[fr] === 'x' && !seenX) seenX = !seenX;

        if (actualBoard[fr] === 'o' && !seenO) seenO = !seenO;
      };
    };

    if ((seenX && seenO) || (seenX && !seenO)) {
      updatedScoreX++;

      this.setState({
        board: newBoard,
        player: newPlayer,
        scoreX: updatedScoreX,
        scoreY: updatedScoreY,
        won: null,
        clicksNeeded: 0
      });
    };

    if (seenO && !seenX) {
      updatedScoreY++;

      this.setState({
        board: newBoard,
        player: newPlayer,
        scoreX: updatedScoreX,
        scoreY: updatedScoreY,
        won: null,
        clicksNeeded: 0
      });
    };
  }

  resetButtonHandler = () => {
    const newBoard = Array(9).fill(null);
    const newPlayer = 'x';
    this.setState({
      board: newBoard,
      player: newPlayer,
      scoreX: this.state.scoreX,
      scoreY: this.state.scoreY,
      won: null,
      clicksNeeded: 0
    });
  }

  resetScoreHandler = () => {
    const newBoard = Array(9).fill(null);
    const newPlayer = 'x';
    this.setState({
      board: newBoard,
      player: newPlayer,
      scoreX: 0,
      scoreY: 0,
      won: null,
      clicksNeeded: 0
    });
  }

  handleExit = () => {
    this.setState({
      exit: true
    });
  }

  doHandleExit = () => {
    if (this.state.exit) {
      return (
        <LoadingBar
          nextElement='App'
        />
      );
    } else {
      const box = this.state.board.map((box, index) => <div
        className='box'
        key={index}
        onClick={this.state.singlePlayer ? () => this.handleSingleModeClick(index) : () => this.handleClick(index)}>{box}</div>);
      return (
        <React.Fragment>
          <p className='playerTurn'> <b className='playerItself'>{this.state.player}</b>'s turn</p>
          <div className="container">
            <div className="board" onClick={this.showResults}>
              {box}
            </div>
          </div>
          <button className='resetButton' onClick={this.resetButtonHandler}>Reset board</button>
          <Score
            name1={this.props.name1}
            name2={this.props.name2}
            scoreX={this.state.scoreX}
            scoreY={this.state.scoreY}
          />
          <button className='resetScore' onClick={this.resetScoreHandler}>Reset score</button>
          <button className='exitButton' onClick={this.handleExit}>Exit to main menu</button>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      this.doHandleExit()
    );
  }
}

export default Board;
