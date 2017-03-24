import React, { Component } from 'react';

const ShareExtendState = (CategoryContainer) => class extends Component {
  state = { extended: false }

  handleExtendClick = () => {
    this.setState((prevState) => ({ extended: !prevState.extended }));
  }

  getChildrenCount = (children) => {
    return React.Children.toArray(children).length;
  }

  render() {
    return (
      <CategoryContainer
        {...this.props}
        {...this.state}
        onExtend={this.handleExtendClick}
        getChildrenCount={this.getChildrenCount}/>
    );
  }
}

export default ShareExtendState;
