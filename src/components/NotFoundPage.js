import React from 'react';
import { browserHistory } from 'react-router';

export default function NotFound() {
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