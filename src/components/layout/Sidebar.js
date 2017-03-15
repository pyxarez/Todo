import React, { Component } from 'react';

import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  static propTypes = {
    categories: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
    categoryContainer: React.PropTypes.func.isRequired
  }

  _renderCategoryList = (categories, CategoryContainer, rest) => {
    return categories.map((category) => {
      const nestedCategories = category.nested;

      return (
        <CategoryContainer
          key={category.id}
          id={category.id}
          title={category.title}
          {...rest}>
          {category.nested.length > 0 &&
            this._renderCategoryList(nestedCategories, CategoryContainer, rest)}
        </CategoryContainer>
      )
    });
  }

  render() {
    const {
      categories,
      categoryContainer,
      ...rest
    } = this.props;

    return (
      <div className="my-sidebar-component">
        <div className="sidebar">
          {categories.length > 0 &&
            this._renderCategoryList(categories, categoryContainer, rest)}
        </div>
      </div>
    );
  }
}
