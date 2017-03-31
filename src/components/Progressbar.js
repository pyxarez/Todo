import React from 'react';

import './Progressbar.res/styles.css';

Progressbar.propTypes = {
  progress: React.PropTypes.string
}


export default function Progressbar({ progress }) {
  return (
    <div className="my-progressbar-component">
      <div
        style={ progress && { width: progress }}
        className={"progressbar__state" + (progress === '100%' ? ' progressbar__state_full' : '')}/>
    </div>
  );
}
