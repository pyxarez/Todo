import React from 'react';

import './Button.res/style.css'

const Button = (props) => {
  const {
    type,
    onClick,
    categoryName
    } = props;

  const handleIncomingEvent = () => {
    onClick(categoryName);
  }
  
  return  <button className={`my-button-component button-${type}`} onClick={handleIncomingEvent}></button>;
}

export default Button;
