import React, { Component } from 'react';

import Button from './Button';

export default class ButtonContainer extends Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    categoryId: React.PropTypes.node.isRequired,
    handleClick: React.PropTypes.func.isRequired
  }

  handleClick = () => {
    const {
      categoryId,
      onClick
    } = this.props;

    onClick(categoryId);
  }

  render() {
    const type = this.props.type;

    return <Button type={type} onClick={this.handleClick}/>
  }
}