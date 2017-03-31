import React from 'react';

import './Button.res/style.css'

Button.propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default function Button({type, onClick, value}) {
  return type
    ? <button
        className={`my-button-component button-${type}`}
        onClick={onClick}>{value}</button>
    : <button
        className={'my-button-component'}
        onClick={onClick}>{value}</button>
}
