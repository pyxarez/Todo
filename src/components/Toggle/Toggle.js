import React, { Component } from 'react';
import '../../style/Button.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <a href="#" className={this.state.isToggleOn ? 'Button Button-red' : 'Button Button-grey'} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </a>
    )
  }
}

export default Toggle;