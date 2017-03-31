import React, { Component, PropTypes} from 'react';

import './TextInput.res/style.css';

export default class TextInput extends Component {
  static propTypes = {
    isFocused: PropTypes.bool,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
  }

  static defaultProps = {
    isFocused: false
  }

  render() {
    const {
      isFocused,
      onKeyPress,
      placeholder,
      defaultValue
    } = this.props;

    return (
      <input
        autoFocus={isFocused}
        onKeyPress={onKeyPress}
        className="my-textInput-component"
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}/>
    );
  }
}
