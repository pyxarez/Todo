import React from 'react';

import Button from './Button';
import './Task.res/style.css';

Task.propTypes = {
  isDone: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
  handleDoneTaskClick: React.PropTypes.func.isRequired,
  handleEditTaskClick: React.PropTypes.func.isRequired
}

export default function Task({ isDone, title, handleDoneTaskClick, handleEditTaskClick }) {
  return (
    <div className="my-task-component">
      <input onChange={handleDoneTaskClick} checked={isDone} type="checkbox"/>
      <h2>{title}</h2>
      <Button onClick={handleEditTaskClick} type="edit" />
    </div>
  );
}