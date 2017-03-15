import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Header from '../components/layout/Header';
import EditCategoryContainer from '../components/common/EditCategoryContainer';
import Sidebar from '../components/layout/Sidebar';
import EditTaskContainer from '../components/layout/EditTaskContainer';
import NotFound from './NotFound';
import './EditPage.res/style.css';

export default class EditPage extends Component {
  state = { 
    globalStorage:this.props.route.gs,
    task:this.props.route.gs.getTasks(this.props.params.categoryId).find((task) => task.id === +this.props.params.taskId)
  }

  handleSwapCategoryClick = (targetLocationId) => {
    const {
      categoryId:prevLocationId,
      taskId
    } = this.props.params;
    const globalStorage = this.state.globalStorage;

    globalStorage.changeTaskLocation(prevLocationId, targetLocationId, taskId);
    browserHistory.push('/todo/main');
  }

  handleSaveChangesClick = (title, isDone, description) => {
    const task = this.state.task;

    task.title = title;
    task.isDone = isDone;
    task.description = description;

    browserHistory.push('/todo/main');
  }

  handleCancelClick = () => {
    browserHistory.push('/todo/main');
  }

  render() {
    const task = this.state.task;
    if (!task) return <NotFound onClick={this.handleCancelClick}/>

    const categoryId = +this.props.params.categoryId;
    const categories = this.state.globalStorage.getCategories();

    return (
      <div className="my-edit-page-component">
        <Header title={task.title} />
        <div className="main">
          <Sidebar
            categories={categories}
            categoryContainer={EditCategoryContainer}
            handleSwapCategoryClick={this.handleSwapCategoryClick}
            currentCategoryId={categoryId}/>
          <EditTaskContainer
            title={task.title}
            isDone={task.isDone}
            description={task.description}
            handleSaveChangesClick={this.handleSaveChangesClick}
            handleCancelClick={this.handleCancelClick}/>
        </div>
      </div>
    );
  }
}
