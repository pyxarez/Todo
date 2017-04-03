import React from 'react';

import CheckBoxInput from './CheckBoxInput';

import Button from './Button';
import './Task.res/style.css';

Task.propTypes = {
  isDone: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
  handleDoneTaskClick: React.PropTypes.func.isRequired,
  handleEditTaskClick: React.PropTypes.func.isRequired
}

export default function Task({
    isDone,
    title,
    handleDoneTaskClick,
    handleEditTaskClick
}) {

  if (title === '12345') {
    // console.log('In the task')
    // console.log( isDone);
  }
  return (
    <div className="my-task-component">
      <CheckBoxInput
        defaultChecked={isDone}
        handleClick={handleDoneTaskClick}/>
      {/* <input className='task-input' onChange={handleDoneTaskClick} checked={isDone} type="checkbox"/> */}
      <p className='task-paragraph'>{title}</p>
      <Button onClick={handleEditTaskClick} type="edit" />
    </div>
  );
}
