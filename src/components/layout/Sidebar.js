import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import CategoryWrapper from '../common/CategoryWrapper';
import findCategory from '../utils/findCategory';
import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  state = { 
    store: [
      ["Category"],
      ["Films", "PornFilms", "MultFilms"],
      ["College"]
    ]
   }

  handleAddClick = (prop) => {
    const store = this.state.store;

    this.setState({store: [[prop], ...store]})
  }

  handleDeleteClick = (category) => {
    let answer = confirm('Do you really want to delete this category?');
    if (!answer) return;

    const store = this.state.store;
    let newStore = [...store];

    const [i, j] = findCategory(newStore, category);
    if (j === 0) newStore.splice(i, 1);
    else newStore[i].splice(j, 1);

    this.setState({store: newStore});
  }

  handleEditCategoryClick = (category) => {
    const store = this.state.store;
    let newStore = [...store];

    const newName = prompt('Enter new name', category);
    if (!newName) return;

    const [i, j] = findCategory(newStore, category);
    newStore[i][j] = newName;

    this.setState({store: newStore});
  }

  handleAddNestedClick = (category) => {
    const store = this.state.store;
    let newStore = [...store];

    const [i] = findCategory(store, category);
    const newName = prompt('Enter name', category);

    newStore[i].push(newName);

    this.setState({store: newStore});
  }

  render() {
    const createCategories = () => {
      const categories = this.state.store.map((category, index) => 
        <CategoryWrapper
          key={index}
          members={category}
          onDeleteClick={this.handleDeleteClick}
          handleEditCategoryClick={this.handleEditCategoryClick}
          handleAddNestedClick={this.handleAddNestedClick}
          />);

      return categories;
    }

    return (
      <div className="my-sidebar-component">
        {this.props.inputRequired 
          &&  <TextBox 
                onClick={this.handleAddClick}
                placeholder="Enter category title"/>
          }
        <div className="sidebar">
          {createCategories()}
        </div>
      </div>
    );
  }
}
