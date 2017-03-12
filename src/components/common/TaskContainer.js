import React, { Component } from 'react';

import Task from './Task';

export default class TaskContainer extends Component {
  static propTypes = {
    task: React.PropTypes.shape({
      id: React.PropTypes.node.isRequired,
      title: React.PropTypes.string.isRequired,
      isDone: React.PropTypes.bool.isRequired
    }),
    handleDoneTaskClick: React.PropTypes.func.isRequired
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
        handleDoneTaskClick={this.handleDoneTaskClick}/>
    );
  }
}
