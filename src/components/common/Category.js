import React, { Component } from 'react';

import Button from '../common/Button'

export default class Category extends Component {
  static defaultProps = {
    index: 0;
  }
  render() {
    const buttonStyles = {
      edit {
        
      },
    }

    return (
      <div>
        Category {this.props.index}
        <Button styles={}></Button>
        <Button></Button>
      </div>
    );
  }
}
