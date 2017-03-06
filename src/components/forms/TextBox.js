import React, { Component } from 'react';

import './TextBox.res/style.css';

export default class TextBox extends Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.state.value);
  }

  render() {
    const placeholder = this.props.placeholder;

    return (
      <div className="my-textbox-component">
        <input 
          onChange={this.handleChange}
          className="textbox-input"
          type="text"
          required
          placeholder={placeholder}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
