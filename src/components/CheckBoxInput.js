import React, { PropTypes } from 'react';

import './CheckBoxInput.res/style.css';

class CheckBoxInput extends React.Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
  };

  render() {
    const { defaultChecked } = this.props;
    return (
      <label className='my-checkBoxInput-component'>
        <input className='checkBoxInput-hidden-input' type="checkbox" defaultChecked={defaultChecked}/>
        <span className='checkBoxInput-styled-span'/>
      </label>
    );
  }
}

export default CheckBoxInput;
