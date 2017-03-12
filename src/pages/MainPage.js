import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import TaskListContainer from '../components/layout/TaskListContainer';
import ShowDone from '../components/common/ShowDone';
import Filter from '../components/common/Filter';
import MainCategoryContainer from '../components/common/MainCategoryContainer';
import Progressbar from '../components/common/Progressbar';
import TextBox from '../components/forms/TextBox';
import DataStorage from '../components/utils/DataStorage';
import './MainPage.res/style.css';

export default class MainPage extends Component {
  state = {
    globalStorage: DataStorage.of(),
    showDone: true
  }

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  handleShowDoneClick = () => {
    this.setState({ showDone: !this.state.showDone });
  }

  handleAddCategoryClick = (title) => {
    const globalStorage = this.state.globalStorage;
    globalStorage.addNewCategory(title);

    this.setState({ globalStorage });
  }

  handleEditCategoryClick = (id) => {
    const globalStorage = this.state.globalStorage;

    globalStorage.editCategory(id);
    this.setState({ globalStorage });
  }

  handleAddNestedCategoryClick = (id) => {
    const globalStorage = this.state.globalStorage;

    globalStorage.addNestedCategory(id);
    this.setState({ globalStorage });
  }

  handleDeleteCategoryClick = (id) => {
    const globalStorage = this.state.globalStorage;

    globalStorage.deleteCategory(id);
    this.setState({ globalStorage });
  }

  handleAddNewTaskClick = (id, title) => {
    const globalStorage = this.state.globalStorage;

    globalStorage.addTask(id, title);
    this.setState({ globalStorage });
  }

  handleDoneTaskClick = (id) => {
    const globalStorage = this.state.globalStorage;
    const categoryId = this.props.params.id;

    const taskList = globalStorage.getTasks(categoryId);
    taskList.find(task => task.id === id)
            .toggleDone();

    this.setState({ globalStorage });
  }

  _renderCategoryList = (categories=this.state.globalStorage.getCategories()) => {
    return categories.map((category) => {
      const nestedCategories = category.nested;

      return (
        <MainCategoryContainer
          key={category.id}
          id={category.id}
          title={category.title}
          handleEditCategoryClick={this.handleEditCategoryClick}
          handleAddNestedCategoryClick={this.handleAddNestedCategoryClick}
          handleDeleteCategoryClick={this.handleDeleteCategoryClick}>
          {category.nested.length > 0 && this._renderCategoryList(nestedCategories)}
        </MainCategoryContainer>
      )
    });
}

  render() {
    const id = this.props.params.id;
    const showDone = this.state.showDone;
    const progress = this.state.globalStorage.getProgress();
    const taskList = id ? this.state.globalStorage.getTasks(id) : [];

    return (
      <div className="my-main-page-component">
        <Header title={'To-Do List'}>
          <ShowDone
            handleShowDoneClick={this.handleShowDoneClick}
            showDone={showDone}/>
          <Filter
            URLParams={this.props.params}/>
          <Progressbar progress={progress}/>
        </Header>
        <div className="main">
          <div className="main__sidebar">
            <TextBox
              isFocused={true}
              onClick={this.handleAddCategoryClick}
              placeholder="Enter category title"/>
            <Sidebar>
              {this._renderCategoryList()}
            </Sidebar>
          </div>
          <TaskListContainer
            URLParams={this.props.params}
            showDone={showDone}
            taskList={taskList}
            handleAddNewTaskClick={this.handleAddNewTaskClick}
            handleDoneTaskClick={this.handleDoneTaskClick}/>
        </div>
      </div>
    );
  }
}


