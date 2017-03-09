import React from 'react';

import Button from './Button';
import './Task.res/style.css';

Task.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default function Task(props) {
  const title = props.title;

  return (
    <div className="my-task-component">
      <input type="checkbox"/>
      <h2 >{title}</h2>
      <Button type="edit"/>
    </div>
  );
}

