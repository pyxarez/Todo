import React from 'react';
import { browserHistory } from 'react-router';

NotFound.PropTypes = {
  onClick: React.PropTypes.func.isRequired,
}

export default function NotFound({onClick}) {
  const goBack = () => {
    browserHistory.push('/main');
  }

  return (
    <div>
      <h1>Task not found</h1>
      <button onClick={goBack}>Main page</button>
    </div>
  );
}