import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Task from './Task';

export default class TaskContainer extends Component {
  static propTypes = {
    categoryId: React.PropTypes.string.isRequired,
    task: React.PropTypes.shape({
      id: React.PropTypes.node.isRequired,
      title: React.PropTypes.string.isRequired,
      isDone: React.PropTypes.bool.isRequired
    }),
    handleDoneTaskClick: React.PropTypes.func.isRequired
  }

  handleEditTaskClick = () => {
    const categoryId = this.props.categoryId;
    const {
      id:taskId,
      title
    } = this.props.task;

    const path = `/todo/edit/${categoryId}/${taskId}/${title}`;
    browserHistory.push(path);
  }

  handleDoneTaskClick = () => {
    const handleDoneTaskClick = this.props.handleDoneTaskClick;
    const {
      id,
      title
    } = this.props.task;

    handleDoneTaskClick(id, title);
  }

  render() {
    const {
      isDone,
      title
    } = this.props.task;

    return (
      <Task
        title={title}
        isDone={isDone}
        handleDoneTaskClick={this.handleDoneTaskClick}
        handleEditTaskClick={this.handleEditTaskClick}/>
    );
  }
}
