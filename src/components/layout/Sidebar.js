import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import CategoryWrapper from '../common/CategoryWrapper';
import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  static propTypes = {
    inputRequired: React.PropTypes.bool,
    changeGlobalStorage: React.PropTypes.func.isRequired,
    globalStorage: React.PropTypes.object.isRequired
  }
   
  handleAddCategoryClick = (title) => {
    const globalStorage = this.props.globalStorage;
    globalStorage.addNewCategory(title);
    this.props.changeGlobalStorage({ globalStorage });
  }

  render() {
    const {
      inputRequired,
      changeGlobalStorage,
      globalStorage
    } = this.props;

    const createCategories = (storage) => {
      const tree = storage.map((category, index) => {
        const {
          id,
          title,
          nested
        } = category;

        return (
          <CategoryWrapper
            key={index}
            id={id}
            title={title}
            changeGlobalStorage={changeGlobalStorage}
            globalStorage={globalStorage}>
            {nested.length > 0 && createCategories(nested)}
          </CategoryWrapper>);
      });

      return tree;
    }

    return (
      <div className="my-sidebar-component">
        {inputRequired 
          &&  <TextBox
                isFocused={true}
                onClick={this.handleAddCategoryClick}
                placeholder="Enter category title"/>
          }
        <div className="sidebar">
          { createCategories(globalStorage.storage) }
        </div>
      </div>
    );
  }
}
