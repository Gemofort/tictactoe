import React, { Component } from 'react';
import './Score.css';

class Score extends Component {

  showScore = () => {
    return (
      <div className='score'>
        <p className='badge badge-primary m-2' id='scorePlayer'>X : {this.props.scoreX}</p>
        <br />
        <p className='badge badge-primary m-2' id='scorePlayer'>O : {this.props.scoreY}</p>
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