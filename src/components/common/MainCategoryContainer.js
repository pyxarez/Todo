import React, { Component } from 'react';

import Button from './Button';
import Category from './Category';
import ShareExtendState from './ShareExtendState';
import './CategoryContainer.res/style.css';


class Container extends Component {
  static propTypes = {
    id: React.PropTypes.node.isRequired,
    title: React.PropTypes.string.isRequired,
    handleEditCategoryClick: React.PropTypes.func.isRequired,
    handleAddNestedCategoryClick: React.PropTypes.func.isRequired,
    handleDeleteCategoryClick: React.PropTypes.func.isRequired,
    extended: React.PropTypes.bool.isRequired,
    onExtend: React.PropTypes.func.isRequired,
    getChildrenCount: React.PropTypes.func.isRequired,
    children: React.PropTypes.oneOfType(
      [
        React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
        React.PropTypes.bool
      ]).isRequired
  }

  handleEditCategoryClick = () => {
    const {
      id,
      handleEditCategoryClick
    } = this.props;

    handleEditCategoryClick(id);
  }

  handleAddNestedCategoryClick = () => {
    const {
      id,
      handleAddNestedCategoryClick
    } = this.props;

    handleAddNestedCategoryClick(id);
  }

  handleDeleteCategoryClick = () => {
    const {
      id,
      handleDeleteCategoryClick
    } = this.props;

    handleDeleteCategoryClick(id);
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
            onClick={this.handleEditCategoryClick}
            style={{ marginLeft: '10px', marginRight: 'auto'}}/>
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

const MainCategoryContainer = ShareExtendState(Container);
export default MainCategoryContainer;