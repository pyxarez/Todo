import React, { Component } from 'react';

import Category from './Category';
import './CategoryWrapper.res/style.css';

export default class CategoryWrapper extends Component {
  state = { extended: false }

  handleExtendClick = () => {
    this.setState({ extended: !this.state.extended});
  }

  render() {
    const {
      members,
      onDeleteClick,
      handleEditCategoryClick,
      handleAddNestedClick
    }= this.props;
    const extended = this.state.extended;

    const extendArray = (categories) => {
      let extended = [];

      for (var i = 1; i < categories.length; i++) {
       extended.push(<Category
                      key={i}
                      onDeleteClick={onDeleteClick}
                      mayAddNested={false}
                      handleEditCategoryClick={handleEditCategoryClick}
                      handleAddNestedClick={handleAddNestedClick}
                      title={categories[i]}
                      />)
      }

      return extended;
    }

    return (
      <div className="my-category-wrapper-component">
        <Category 
          mayExtends={members.length > 1 ? true : false}
          mayAddNested={true}
          onExtendClick={this.handleExtendClick}
          onDeleteClick={onDeleteClick}
          handleEditCategoryClick={handleEditCategoryClick}
          handleAddNestedClick={handleAddNestedClick}
          title={members[0]}
          />
        {members.length > 1
         && <div className={extended ? "categories categories_extended" : "categories categories_hidden"}>
               {extendArray(members)}
            </div>}
      </div>
    );
  }
}
