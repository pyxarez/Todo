import React, { Component } from 'react';

import './TextBox.res/style.css';

export default class TextBox extends Component {
  static propTypes = {
    isFocused: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  }
  
  static defaultProps = {
    isFocused: false
  }

  handleClick = () => {
    const value = this.textInput.value;
    if (value.trim() === '') {
      alert("Type something please");
      return;
    }
    
    this.textInput.value = '';
    this.props.onClick(value);
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleClick();
  }

  render() {
    const {
      isFocused,
      placeholder,
    }= this.props;

    return (
      <div className="my-textbox-component">
        <input
          autoFocus={isFocused}
          onKeyPress={this.handleKeyPress}
          ref={(input) => { this.textInput = input }}
          className="textbox-input"
          type="text"
          placeholder={placeholder}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
