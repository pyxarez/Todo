import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import CategoryWrapper from '../common/CategoryWrapper';
import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  render() {
    const {
      categories,
      inputRequired,
      newCategory,
      editExistingCategory
    } = this.props;

    const createCategories = (categories) => {
      const tree = categories.map((category, index) => {
        const {
          title,
          nested
        } = category;

        return (
          <CategoryWrapper
            key={index}
            title={title}
            onClick={editExistingCategory}>
            {nested.length > 0 && createCategories(nested)}
          </CategoryWrapper>);
      });

      return tree;
    }

    return (
      <div className="my-sidebar-component">
        {inputRequired 
          &&  <TextBox 
                onClick={newCategory}
                placeholder="Enter category title"/>
          }
        <div className="sidebar">
          { createCategories(categories) }
        </div>
      </div>
    );
  }
}
