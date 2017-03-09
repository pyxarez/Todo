import React from 'react';

import './Button.res/style.css'

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  categoryName: React.PropTypes.string
}

function Button(props) {
  const {
    type,
    onClick
  } = props;

  return  (
    <button 
      className={`my-button-component button-${type}`}
      onClick={onClick} />);
}

export default Button;
