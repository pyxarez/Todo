import React, { Component } from 'react';

import './TextBox.res/style.css';

export default class TextBox extends Component {
  render() {
    const placeholder = this.props.placeholder;
    
    return (
      <div className="Textbox">
        <input className="Textbox-input" type="text" placeholder={placeholder}/>
        <button>Add</button>
      </div>
    );
  }
}
