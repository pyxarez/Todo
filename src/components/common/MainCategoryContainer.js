import React from 'react';

import ButtonContainer from './ButtonContainer';
import Category from './Category';
import HOCCategoryContainer from './HOCCategoryContainer';
import './CategoryContainer.res/style.css';

Container.propTypes = {
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

function Container(props) {
  const {
    id,
    title,
    handleEditCategoryClick,
    handleAddNestedCategoryClick,
    handleDeleteCategoryClick,
    extended,
    onExtend,
    getChildrenCount,
    children
  } = props;

  return (
    <div className='my-categoryContainer-component'>
      <Category id={id} title={title} onExtend={getChildrenCount(children) > 0 && onExtend}>
        <ButtonContainer
          type="edit"
          categoryId={id}
          onClick={handleEditCategoryClick} />
        <ButtonContainer
          type="delete"
          categoryId={id}
          onClick={handleDeleteCategoryClick}/>
        <ButtonContainer
          type="add"
          categoryId={id}
          onClick={handleAddNestedCategoryClick}/>
      </Category>
      {children && 
        <div className={extended
          ? "categories categories_extended"
          : "categories categories_hidden"}>{children}</div>}
    </div>
  );
}

const MainCategoryContainer = HOCCategoryContainer(Container);
export default MainCategoryContainer;