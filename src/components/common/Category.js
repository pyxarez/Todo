import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from '../common/Button';
import './Category.res/style.css';

export default class Category extends Component {
  state = { extended: true }

  static propTypes = {
    title: React.PropTypes.string,
    mayExtends: React.PropTypes.bool.isRequired,
    changeGlobalStorage: React.PropTypes.func.isRequired,
    globalStorage: React.PropTypes.object.isRequired,
    handleExtendClick: React.PropTypes.func.isRequired
  }

  handleEditCategoryClick = () => {
    const {
      title,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.editCategory(title);
    changeGlobalStorage({ globalStorage });
  }

  handleAddNestedCategoryClick = () => {
    const {
      title,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.addNestedCategory(title);
    changeGlobalStorage({ globalStorage });
  }

  handleDeleteCategoryClick = () => {
    const {
      title,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.deleteCategory(title);
    changeGlobalStorage({ globalStorage });
  }

  render() {
    const {
      title,
      mayExtends,
      handleExtendClick
    } = this.props;

    return (
      <div className="my-category-component">
        {mayExtends &&
          <Button type="extend" onClick={handleExtendClick}/>}
        <Link to={`/${title}/`}>{title}</Link>
        <Button
          type="edit"
          categoryName={title}
          onClick={this.handleEditCategoryClick}/>
        <Button
          type="delete"
          onClick={this.handleDeleteCategoryClick}
          categoryName={title}/>
        <Button
          onClick={this.handleAddNestedCategoryClick}
          type="add"
          categoryName={title}/>
      </div>
    );
  }
}
