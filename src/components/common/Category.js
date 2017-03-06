import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from '../common/Button';
import './Category.res/style.css';

export default class Category extends Component {
  state = { extended: true }

  static defaultProps = {
    title: "Category",
    extends: false
  }

  render() {
    const {
      title,
      mayExtends,
      onExtendClick,
      onDeleteClick,
      handleEditCategoryClick,
      handleAddNestedClick,
      mayAddNested
      } = this.props;

    return (
      <div className="my-category-component">
        {mayExtends && <Button type="extend" onClick={onExtendClick}/>}
        
        <Link to={`/${title}`} >{title}</Link>
        <Button type="edit"
          categoryName={title}
          onClick={handleEditCategoryClick}
          />
        <Button type="delete"
          categoryName={title}
          onClick={onDeleteClick}
          />
        {mayAddNested && <Button type="add"
                            categoryName={title}
                            onClick={handleAddNestedClick}
                            />}

      </div>
    );
  }
}
