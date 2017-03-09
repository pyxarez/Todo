import React, { Component } from 'react';

import Category from './Category';
import './CategoryWrapper.res/style.css';

export default class CategoryWrapper extends Component {
  state = { extended: false }

  handleExtendClick = () => {
    const extended = this.state.extended;
    this.setState({ extended: !extended});
  }

  render() {
    const extended = this.state.extended;
    const {
      children,
      title,
      onClick
    } = this.props;

    const getChildrenCount = (children) => {
      return React.Children.toArray(children).length;
    }

    return (
      <div className="my-category-wrapper-component">
        <Category 
          mayExtends={getChildrenCount(children) > 0 ? true : false}
          onExtendClick={this.handleExtendClick}
          onClick={onClick}
          title={title}/>
        {children && 
          <div className={extended 
            ? "categories categories_extended" 
            : "categories categories_hidden"}>{children}</div>}
      </div>
    );
  }
}
