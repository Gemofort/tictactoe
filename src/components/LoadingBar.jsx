import React, { Component } from 'react';
import Board from './Board.jsx';
import './../styles/LoadingBar.css';
import App from './App';

class LoadingBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextElement: this.props.nextElement,
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
        }, 750);
        clearInterval(id);
      } else {
        this.setState({
          done: false,
          width: updwidth + 1,
          style: {
            width: `${updwidth + 1}px`
          }
        });
      };
    }, 100);
  }

  showBoard = () => {
    if (this.state.done && this.state.nextElement === 'Board') {
      return (
        <Board
          name1={this.props.name1}
          name2={this.props.name2}
          singlePlayer={this.props.singlePlayer}
          exit={false}
        />
      );
    } else if (this.state.done && this.state.nextElement === 'App') {
      return (
        <App
          submitted={false}
          singlePlayer={false}
        />
      );
    } else {
      return (
        <React.Fragment>
          <p className='loadingTag'>Loading ...</p>
          <div className='outterBar'>
            <div className='barLoader' style={this.state.style}>{this.loadingBar()}</div>
          </div>
        </React.Fragment>
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