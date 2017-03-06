import React from 'react';

import './Button.res/style.css'

const Button = (props) => {
  const type = props.type;
  
  return  <button className={`my-button-component button-${type}`}></button>;
}

export default Button;
