import React, { Component } from 'react';

import './TextBox.res/style.css';

export default class TextBox extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const value = this.refs.categoryInput.value;
    this.props.onClick(value);
  }

  render() {
    const placeholder = this.props.placeholder;

    return (
      <div className="my-textbox-component">
        <input 
          ref="categoryInput"
          className="textbox-input"
          type="text"
          placeholder={placeholder}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
