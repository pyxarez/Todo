import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>Hi here, my friend!!</h3>
        <h3>It is <span className="Time">{this.state.date.toLocaleTimeString()}</span>.</h3>
      </div>
    );
  }
}

export default Clock;