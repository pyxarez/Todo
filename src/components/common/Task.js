import React, { Component } from 'react';

import Button from './Button';
import './Task.res/style.css';

export default class Task extends Component {
  render() {
    const {
      title
      } = this.props;
    return (
      <div className="my-task-component">
        <input  className="task-element" type="checkbox"/>
        <h2 className="task-element" >{title}</h2>
        <Button className="task-element" type="edit"/>
      </div>
    );
  }
}
