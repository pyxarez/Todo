import React from 'react';

import './Button.res/Button.css'

const Button = (props) => {
  return  <button className={`Button Button-${props.type}`}></button>;
}

export default Button;
