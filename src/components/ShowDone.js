import React from 'react';

import './ShowDone.res/style.css';

ShowDone.propTypes = {
  handleShowDoneClick: React.PropTypes.func.isRequired,
  showDone: React.PropTypes.bool
}

export default function ShowDone({handleShowDoneClick, showDone}) {
  return (
    <label className="my-showdone-component">
      <input onChange={handleShowDoneClick} checked={showDone} type="checkbox"/>
      Show done
    </label>
    );
}