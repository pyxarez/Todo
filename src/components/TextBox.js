import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import TextInput from './TextInput';

import { validateInput } from '../utils/helpers';

import './TextBox.res/style.css';

export default class TextBox extends Component {
  static propTypes = {
    isFocused: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  }

  handleClick = () => {
    const input = ReactDOM.findDOMNode(this.textInput);
    const value = input.value;

    if (!validateInput(value)) {
      alert("Type something please");
      return;
    } else if (value.length > 30) {
      alert("Too much characters");
      return;
    }

    input.value = '';
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
        <TextInput
          onKeyPress={this.handleKeyPress}
          ref={input => { this.textInput = input }}
          isFocused={isFocused}
          placeholder={placeholder}/>
        <Button value='Add' onClick={this.handleClick}/>
      </div>
    );
  }
}
