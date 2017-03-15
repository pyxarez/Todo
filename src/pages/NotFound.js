import React from 'react';

NotFound.propTypes = {
  onClick: React.PropTypes.func.isRequired
}

export default function NotFound({onClick}) {
  return (
    <div>
      <h1>Task not found</h1>
      <button onClick={onClick}>Main page</button>
    </div>
  );
}