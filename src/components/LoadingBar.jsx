import React, { Component } from 'react';
import Board from './Board';
import './../styles/LoadingBar.css'

class LoadingBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      width: 0,
      style: {
        width: '0px'
      }
    }
  }

  loadingBar = () => {
    const id = setInterval(() => {
      let updwidth = this.state.width;
      if (updwidth === 390) {
        setTimeout(() => {
          this.setState({
            done: true,
            width: 390,
            style: '390px'
          });
        }, 500);
        clearInterval(id);
      } else {
        this.setState({
          done: false,
          width: updwidth + 1,
          style: {
            width: `${updwidth + 1}px`
          }
        });
      }
    }, 100);
  }

  showBoard = () => {
    if (this.state.done) {
      return (
        <Board
          name1={this.props.name1}
          name2={this.props.name2}
          singlePlayer={this.props.singlePlayer}
        />
      );
    } else {
      return (
        <div className='outterBar'>
          <div className='barLoader' style={this.state.style}>{this.loadingBar()}</div>
        </div>
      );
    }
  }

  render() {
    return (
      this.showBoard()
    );
  }
}

export default LoadingBar;