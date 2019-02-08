import React, { Component } from 'react';
import LoadingBar from './LoadingBar';
import './../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: null,
      name2: null,
      names: Array(2),
      submitted: false,
      onePlayer: false,
    };

  }
  handleChangeFirst = (event) => {
    this.setState({
      name1: event.target.value,
      name2: this.state.name2
    });
  }

  handleChangeSecond = (event) => {
    this.setState({
      name1: this.state.name1,
      name2: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let updNames = Array(2);
    updNames[0] = this.state.name1;
    updNames[1] = this.state.name2;
    if (updNames[0] && updNames[1] && updNames[0] !== updNames[1]) {
      this.setState({
        name1: this.state.name1,
        name2: this.state.name2,
        names: updNames,
        submitted: !this.state.submitted
      });
    };
    console.log(this.state.submitted);
  }

  handleSinglePlayer = () => {
    const updSinglePlayer = true;
    this.setState({
      name1: null,
      name2: null,
      names: Array(2),
      submitted: false,
      onePlayer: updSinglePlayer
    });
  }

  handleExit = () => {
    this.setState({
      name1: null,
      name2: null,
      names: Array(2),
      submitted: false,
      onePlayer: false
    });
  }

  showApp = () => {
    if (this.state.submitted) {
      return (
        <React.Fragment>
          <LoadingBar
            name1={this.state.names[0]}
            name2={this.state.names[1]}
            singlePlayer={false}
          />
          <button className='exitButton' onClick={this.handleExit}>Exit to main menu</button>
        </React.Fragment>
      );
    }
    if (this.state.onePlayer) {
      return (
        <React.Fragment>
          <LoadingBar
            nextElement='Board'
            name1={'You'}
            name2={'Bot'}
            singlePlayer={true}
          />
          <button className='exitButton' onClick={this.handleExit}>Exit to main menu</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <form className='playerNames' onSubmit={this.handleSubmit}>
            <h1 className='logoTag'> <b>Tic Tac Toe</b> by Ivan Feofanov</h1>
            <h3>Please enter your nicknames, at least 1 letter and not the same</h3>
            <p className='players'>First Player</p>
            <input type='text' name1={this.state.name1} onChange={this.handleChangeFirst} /> <br />
            <p className='players'>Second Player</p>
            <input type='text' name2={this.state.name1} onChange={this.handleChangeSecond} /><br />
            <input type='submit' value='Submit names' />
            <p className='singlePlayer'>You also can try single player mode if you don't have friedns, lol</p>
            <button className='singlePlayerButton' onClick={this.handleSinglePlayer}>Single player mode</button>
          </form>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      this.showApp()
    );
  }
}

export default App;