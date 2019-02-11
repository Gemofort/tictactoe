import React, { Component } from 'react';
import LoadingBar from './LoadingBar.jsx';
import './../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: '',
      submitted: this.props.submitted ? this.props.submitted : false,
      onePlayer: this.props.onePlayer ? this.props.onePlayer : false,
    };
  }

  handleFormChanage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let updNamesFirst = this.state.name1;
    let updNamesSecond = this.state.name2;
    if (updNamesFirst && updNamesSecond && updNamesFirst !== updNamesSecond) {
      this.setState({
        submitted: true
      });
    };
  }

  handleSinglePlayer = () => {
    this.setState({
      onePlayer: true
    });
  }

  showApp = () => {
    if (this.state.submitted) {
      return (
        <React.Fragment>
          <LoadingBar
            nextElement='Board'
            name1={this.state.name1}
            name2={this.state.name2}
            singlePlayer={false}
          />
        </React.Fragment>
      );
    } else if (this.state.onePlayer) {
      return (
        <LoadingBar
          nextElement='Board'
          name1={'You'}
          name2={'Bot'}
          singlePlayer={true}
        />
      );
    } else {
      return (
        <React.Fragment>
          <form className='playerNames' autoComplete='off' onSubmit={this.handleSubmit}>
            <h1 className='logoTag'> <b className='tictactoe'>Tic Tac Toe</b> by Ivan Feofanov</h1>
            <h3>Please enter your nicknames, at least One letter and not the same</h3>
            <p className='players'>First Player</p>
            <input type='text' name={'name1'} value={this.state.name1} onChange={this.handleFormChanage} /> <br />
            <p className='players'>Second Player</p>
            <input type='text' name={'name2'} value={this.state.name2} onChange={this.handleFormChanage} /><br />
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