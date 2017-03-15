import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import TaskListContainer from '../components/layout/TaskListContainer';
import ShowDone from '../components/common/ShowDone';
import Filter from '../components/common/Filter';
import MainCategoryContainer from '../components/common/MainCategoryContainer';
import Progressbar from '../components/common/Progressbar';
import TextBox from '../components/forms/TextBox';
import './MainPage.res/style.css';

export default class MainPage extends Component {
  state = {
    globalStorage:this.props.route.gs,
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

  render() {
    const id = this.props.params.id;
    const showDone = this.state.showDone;
    const categories = this.state.globalStorage.getCategories();
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
            <Sidebar
              categories={categories}
              categoryContainer={MainCategoryContainer}
              handleEditCategoryClick={this.handleEditCategoryClick}
              handleAddNestedCategoryClick={this.handleAddNestedCategoryClick}
              handleDeleteCategoryClick={this.handleDeleteCategoryClick}/>
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


