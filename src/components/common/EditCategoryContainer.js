import React, { Component } from 'react';

import ButtonContainer from './ButtonContainer';
import Category from './Category';
import HOCCategoryContainer from './HOCCategoryContainer';
import './CategoryContainer.res/style.css;';

Container.propTypes = {
  id: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  handleSwapCategoryClick: React.PropTypes.func.isRequired,
  extended: React.PropTypes.bool.isRequired,
  onExtend: React.PropTypes.func.isRequired,
  getChildrenCount: React.PropTypes.func.isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.element.isRequired)
}

function Container(props) {
  const {
    id,
    title,
    handleSwapCategoryClick,
    extended,
    onExtend,
    getChildrenCount,
    chidlren
  } = props;

  return (
    <div className='my-categoryContainer-component'>
      <Category id={id} title={title} onExtend={ getChildrenCount(chidlren) > 0 && onExtend }>
        <ButtonContainer
          type="swap"
          categoryId={id}
          onClick={handleSwapCategoryClick}/>
      </Category>
      {children && 
        <div className={extended
          ? "categories categories_extended"
          : "categories categories_hidden"}>{children}</div>}
    </div>
  );
}

const EditCategoryContainer = HOCCategoryContainer(Container);
export default EditCategoryContainer;
