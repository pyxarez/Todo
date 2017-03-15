import React from 'react';

import './Button.res/style.css'

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object
}

export default function Button({type, onClick, style}) {
  return  (
    <button 
      className={`my-button-component button-${type}`}
      onClick={onClick}
      style={style}/>
  );
}
