import React from 'react';

import Button from './Button';

import './EditTask.res/style.css';

EditTask.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.bool,
      React.PropTypes.object
    ]
  ),
}

export default function EditTask({ onSave, onCancel, children }) {
  return (
    <div className="my-editTask-component">
      <div className="buttons-container">
        <Button onClick={onSave} value='Save changes'/>
        <Button onClick={onCancel} value='Cancel' />
      </div>
      {children}
    </div>
  );
}
