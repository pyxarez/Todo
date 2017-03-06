import React from 'react';

import './Button.res/style.css'

const Button = (props) => {
  const {type, styles} = props;
  
  return  <button style={styles} className={`Button Button-${type}`}></button>;
}

Button.defaultProps = {
  type: 'add',
  styles: { 
    top: 0,
    left: 0
  }
}

export default Button;
