import React, { Component } from 'react';
import Button from './Button';

import { validateInput } from '../utils/helpers';

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
    if (!validateInput(value)) {
      alert("Type something please");
      return;
    } else if (value.length > 30) {
      alert("Too much characters");
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
          <Button value='Add' onClick={this.handleClick}/>
      </div>
    );
  }
}
