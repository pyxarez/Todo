import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import editCategory from '../utils/actionsWithCategory';
import CategoryWrapper from '../common/CategoryWrapper';
import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  state = {
    stash: [
      {
        title: "Category",
        nested: [],
        tasks: []
      },
      {
        title: "Films",
        nested: [
          {
            title: "PornFilms",
            nested: [],
            tasks: []
          },
          {
            title: "MultFilms",
            nested: [
              {
                title: "Favorite",
                nested: [],
                tasks: []
              }
            ],
            tasks: []
          }
        ],
        tasks: []
      },
      {
        title: "College",
        nested: [],
        tasks: []
      }
    ]
  }

  handleActionWithCategoryClick = ( options ) => {
    const stash = [...this.state.stash];
    editCategory(stash, options);
    this.setState({stash});
  }

  handleAddCategoryClick = ({ target:title }) => {
    const stash = [...this.state.stash];
    const categoryTemplate = {
      title,
      nested: [],
      tasks: []
    };
    
    stash.unshift(categoryTemplate);
    this.setState({stash});
  }

  render() {
    const categories = this.state.stash;
    const counter = 0;

    const createCategories = (categories) => {
      const tree = categories.map((category, index) => {
        const {
          title,
          nested
        } = category;

        return (
          <CategoryWrapper
            key={index}
            id={counter}
            title={title}
            onClick={this.handleActionWithCategoryClick}>
            {nested.length > 0 && createCategories(nested)}
          </CategoryWrapper>);
      });

      return tree;
    }

    return (
      <div className="my-sidebar-component">
        {this.props.inputRequired 
          &&  <TextBox 
                onClick={this.handleAddCategoryClick}
                placeholder="Enter category title"/>
          }
        <div className="sidebar">
          { createCategories(categories) }
        </div>
      </div>
    );
  }
}
