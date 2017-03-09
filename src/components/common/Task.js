import React, { Component } from 'react';

import Button from './Button';

export default class Task extends Component {
  render() {
    const {
      title
      } = this.props;
    return (
      <div>
        <input type="checkbox"/>
        <h2>{title}</h2>
        <Button type="edit"/>
      </div>
    );
  }
}
