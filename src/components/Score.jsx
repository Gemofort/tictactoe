import React, { Component } from 'react';
import './../styles/Score.css';

class Score extends Component {

  constructor(props) {
    super(props);

    this.state = {
      plate: 'badge m-2 '
    };
  }

  handleFirstBadge = () => {
    if (this.props.scoreX > this.props.scoreY) return (this.state.plate + 'badge-light');
    return this.state.plate + 'badge-dark'
  }

  handleSecondBadge = () => {
    if (this.props.scoreY > this.props.scoreX) return (this.state.plate + 'badge-light');
    return this.state.plate + 'badge-dark'
  }

  showScore = () => {
    return (
      <div className='score'>
        <p className={this.handleFirstBadge()} id='scorePlayer'>{this.props.name1.toUpperCase()} (X): {this.props.scoreX}</p>
        <br />
        <p className={this.handleSecondBadge()} id='scorePlayer'>{this.props.name2.toUpperCase()} (0): {this.props.scoreY}</p>
      </div>
    );
  }

  render() {
    return (
      this.showScore()
    );
  }
}

export default Score;