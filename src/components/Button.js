import React from 'react';

import './Button.res/style.css'

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
}

export default function Button({type, onClick}) {
  return  (
    <button
      className={`my-button-component button-${type}`}
      onClick={onClick}/>
  );
}
