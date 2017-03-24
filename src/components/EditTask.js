import React from 'react';

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
        <button onClick={onSave}>Save changes</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
      {children}
    </div>
  );
}
