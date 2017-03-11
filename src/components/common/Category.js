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
      id,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.editCategory(id);
    changeGlobalStorage({ globalStorage });
  }

  handleAddNestedCategoryClick = () => {
    const {
      id,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.addNestedCategory(id);
    changeGlobalStorage({ globalStorage });
  }

  handleDeleteCategoryClick = () => {
    const {
      id,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.deleteCategory(id);
    changeGlobalStorage({ globalStorage });
  }

  render() {
    const {
      id,
      title,
      mayExtends,
      handleExtendClick
    } = this.props;

    return (
      <div className="my-category-component">
        {mayExtends &&
          <Button type="extend" onClick={handleExtendClick}/>}
        <Link to={`/${id}/${title}/`}>{title}</Link>
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
