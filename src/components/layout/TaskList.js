import React from 'react';

import TextBox from '../forms/TextBox';
import './TaskList.res/style.css';

TaskList.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
  handleAddNewTaskClick: React.PropTypes.func.isRequired
}

export default function TaskList({ handleAddNewTaskClick, children }) {
  return (
    <div className="my-tasklist-component">
      <TextBox
        placeholder="Enter task title"
        onClick={handleAddNewTaskClick}/>
      <div className="tasklist">
        {children}
      </div>
    </div>
  );
}


