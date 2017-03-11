import React, { Component } from 'react';

import Category from './Category';
import './CategoryWrapper.res/style.css';

export default class CategoryWrapper extends Component {
  state = { extended: false }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    globalStorage: React.PropTypes.object.isRequired,
    changeGlobalStorage: React.PropTypes.func.isRequired,
    childern: React.PropTypes.arrayOf(React.PropTypes.object)
  }

  handleExtendClick = () => {
    const extended = this.state.extended;
    this.setState({ extended: !extended});
  }

  getChildrenCount = (children) => {
    return React.Children.toArray(children).length;
  }

  render() {
    const extended = this.state.extended;
    const {
      id,
      title,
      changeGlobalStorage,
      globalStorage,
      children
    } = this.props;

    return (
      <div className="my-category-wrapper-component">
        <Category
          id={id}
          title={title}
          mayExtends={this.getChildrenCount(children) > 0 ? true : false}
          changeGlobalStorage={changeGlobalStorage}
          globalStorage={globalStorage}
          handleExtendClick={this.handleExtendClick}/>
        {children && 
          <div className={extended 
            ? "categories categories_extended" 
            : "categories categories_hidden"}>{children}</div>}
      </div>
    );
  }
}
