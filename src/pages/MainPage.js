import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Tasks from '../components/layout/Tasks';
import manipulateTree from '../components/utils/actionsWithCategory';
import './MainPage.res/style.css';

export default class MainPage extends Component {
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
        tasks: [
          {
            title: "Close session",
            isDone: false,
            description: "Клара у карла украла кораллыв"
          },
          {
            title: "Close session",
            isDone: false,
            description: "Very good description"
          }
        ]
      }
    ]
  }

  handleActionWithCategoryClick = (options) => {
    const stash = [...this.state.stash];
    manipulateTree(stash, options);
    this.setState({stash});
  }

  handleAddCategoryClick = (title) => {
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

    return (
      <div className="my-main-page-component">
        <Header />
        <div className="main">
          <Sidebar
            inputRequired="true"
            newCategory={this.handleAddCategoryClick}
            editExistingCategory={this.handleActionWithCategoryClick}
            categories={categories}/>
          <Tasks
            categories={categories}
            currentCategory={this.props.params.category}
            newTask={this.handleActionWithCategoryClick}/>
        </div>
      </div>
    );
  }
}


