import React from 'react';

import Button from './Button';
import './Task.res/style.css';

export default function Task(props) {
  const {
    id,
    isDone,
    children,
    handleDoneTaskClick
  } = props;

  return (
    <div className="my-task-component">
      <input onChange={() => handleDoneTaskClick(id)} checked={isDone} type="checkbox"/>
      <h2>{children}</h2>
      <Button type="edit"/>
    </div>
  );
}

