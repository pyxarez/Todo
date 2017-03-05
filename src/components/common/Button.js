import React from 'react';

import './Button.res/style.css'

const Button = (props) => {
  const {type, styles} = props;
  
  return  <button style={styles} className={`Button Button-${type}`}></button>;
}

export default Button;
