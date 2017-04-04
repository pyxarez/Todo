import React, { PropTypes } from 'react';

import './CheckBoxInput.res/style.css';

class CheckBoxInput extends React.Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    handleClick: PropTypes.func
  };

  static defaultProps = {
    defaultChecked: false
  }

  render() {
    const { handleClick, defaultChecked } = this.props;

    return (
      <label className='my-checkBoxInput-component'>
        <input
          onClick={handleClick}
          className='checkBoxInput-hidden-input'
          type="checkbox"
          defaultChecked={defaultChecked}/>
        <span className='checkBoxInput-styled-span'/>
      </label>
    );
  }
}

export default CheckBoxInput;
