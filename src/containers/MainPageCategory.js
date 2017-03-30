import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addNestedCategory,
  deleteCategory,
  renameCategory
} from '../store/actions/CategoryActions';
import { getTasks } from '../store/actions/TaskListActions';
import { getProgress } from '../store/actions/ProgressActions';

import Button from '../components/Button';
import Category from '../components/Category';
import ShareExtendState from './ShareExtendState';

import './CategoryContainer.res/style.css';

export class Container extends Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    renameCategory: PropTypes.func.isRequired,
    addNestedCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired,
    extended: PropTypes.bool.isRequired,
    onExtend: PropTypes.func.isRequired,
    getChildrenCount: PropTypes.func.isRequired,
    currentCategoryId: PropTypes.number.isRequired,
    children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.element.isRequired),
        PropTypes.bool,
        PropTypes.object
      ]
    )
  }

  handleRenameCategoryClick = () => {
    const {
      id,
      title,
      renameCategory
    } = this.props;
    const newTitle = prompt("Enter new title", title);
    if (!newTitle) return;

    renameCategory(id, newTitle);
  }

  handleAddNestedCategoryClick = () => {
    const {
      id,
      addNestedCategory
    } = this.props;
    const title = prompt("Enter title");
    if (!title) return;

    addNestedCategory(id, title);
  }

  handleDeleteCategoryClick = () => {
    const {
      id,
      deleteCategory,
      currentCategoryId,
      getTasks,
    } = this.props;

    if (!confirm("Are you sure about this?")) return;

    deleteCategory(id);
    getProgress();
    if (currentCategoryId === id) {
      getTasks(null);
    } else {
      getTasks(id);
    }
  }

  render() {
    const {
      id,
      title,
      extended,
      onExtend,
      getChildrenCount,
      children
    } = this.props;

    return (
      <div className='my-categoryContainer-component'>
        <Category id={id} title={title} onExtend={getChildrenCount(children) > 0 && onExtend}>
          <Button
            type="edit"
            onClick={this.handleRenameCategoryClick}/>
          <Button
            type="delete"
            onClick={this.handleDeleteCategoryClick}/>
          <Button
            type="add"
            onClick={this.handleAddNestedCategoryClick}/>
        </Category>
        {children && 
          <div className={extended
            ? "categories categories_extended"
            : "categories categories_hidden"}>{children}</div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNestedCategory: bindActionCreators(addNestedCategory, dispatch),
    deleteCategory: bindActionCreators(deleteCategory, dispatch),
    renameCategory: bindActionCreators(renameCategory, dispatch),
    getTasks: bindActionCreators(getTasks, dispatch),
  }
}

const MainPageCategoryContainer = ShareExtendState(Container);
export default connect(null, mapDispatchToProps)(MainPageCategoryContainer);