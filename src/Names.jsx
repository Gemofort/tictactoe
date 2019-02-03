import React, { Component } from 'react';
import App from './App';
import './Names.css'

class Names extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: '',
      names: ['', '']
    };

    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeSecond = this.handleChangeSecond.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirst(event) {
    this.setState({
      name1: event.target.value,
      name2: this.state.name2
    });
  }

  handleChangeSecond(event) {
    this.setState({
      name1: this.state.name1,
      name2: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let updNames = Array(2);
    updNames[0] = this.state.name1;
    updNames[1] = this.state.name2;
    this.setState({
      name1: this.state.name1,
      name2: this.state.name2,
      names: updNames
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className='playerNames' onSubmit={this.handleSubmit}>
          First Player:<br />
          <input type='text' name1={this.state.name1} onChange={this.handleChangeFirst} /> <br />
          Second Player: <br />
          <input type='text' name2={this.state.name1} onChange={this.handleChangeSecond} /><br />
          <input type='submit' value='Submit names' />
        </form>
        <App
          name1={this.state.names[0]}
          name2={this.state.names[1]}
        />
      </React.Fragment>
    );
  }
}

export default Names;