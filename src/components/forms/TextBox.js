import React, { Component } from 'react';

export default class TextBox extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter category title"/>
        <button>Add</button>
      </div>
    );
  }
}
