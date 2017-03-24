import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './Sidebar.res/style.css';

export class Sidebar extends Component {
  static propTypes = {
    categoryContainer: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    currentCategoryId: PropTypes.number,
    currentTaskId: PropTypes.number,
  }

  _renderCategoryList = (CategoryContainer, categories = this.props.categories) => {
    return categories.map((category) => {
      const nestedCategories = category.nested;

      return (
        <CategoryContainer
          key={category.id}
          id={category.id}
          title={category.title}
          {...this.props}>
          {category.nested.length > 0 &&
            this._renderCategoryList(CategoryContainer, nestedCategories)}
        </CategoryContainer>
      )
    });
  }

  render() {
    const {
      categoryContainer,
      categories
     } = this.props;
    return (
      <div className="my-sidebar-component">
        <div className="sidebar">
          {categories.length > 0 &&
            this._renderCategoryList(categoryContainer)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Sidebar);
