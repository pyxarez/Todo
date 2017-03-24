import React from 'react';

import TextBox from './TextBox';
import './TaskList.res/style.css';

TaskList.propTypes = {
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
      React.PropTypes.bool,
      React.PropTypes.object
    ]
  ),
  onClick: React.PropTypes.func.isRequired
}

export default function TaskList({ onClick, children }) {
  return (
    <div className="my-tasklist-component">
      <TextBox
        placeholder="Enter task title"
        onClick={onClick}/>
      <div className="tasklist">
        {children}
      </div>
    </div>
  );
}


