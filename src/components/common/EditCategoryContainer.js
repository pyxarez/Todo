import React, { Component } from 'react';

import Button from './Button';
import Category from './Category';
import ShareExtendState from './ShareExtendState';
import './CategoryContainer.res/style.css';

class Container extends Component {
  static propTypes = {
    id: React.PropTypes.node.isRequired,
    title: React.PropTypes.string.isRequired,
    handleSwapCategoryClick: React.PropTypes.func.isRequired,
    extended: React.PropTypes.bool.isRequired,
    onExtend: React.PropTypes.func.isRequired,
    getChildrenCount: React.PropTypes.func.isRequired,
    currentCategoryId: React.PropTypes.number.isRequired,
    children: React.PropTypes.oneOfType(
      [
        React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
        React.PropTypes.bool
      ]).isRequired
  }

  handleSwapCategoryClick = () => {
    const {
      id,
      handleSwapCategoryClick
    } = this.props;

    handleSwapCategoryClick(id);
  }

  render() {
    const {
      id,
      title,
      extended,
      onExtend,
      getChildrenCount,
      children,
      currentCategoryId
    } = this.props;

    console.log(currentCategoryId);

    return (
      <div className='my-categoryContainer-component'>
        <Category id={id} title={title} onExtend={ getChildrenCount(children) > 0 && onExtend }>
          {currentCategoryId !== id && 
            <Button
              type="swap"
              onClick={this.handleSwapCategoryClick}
              style={{ marginLeft: 'auto' }}/>}
        </Category>
        {children && 
          <div className={extended
            ? "categories categories_extended"
            : "categories categories_hidden"}>{children}</div>}
      </div>
    );
  }
}

const EditCategoryContainer = ShareExtendState(Container);
export default EditCategoryContainer;
