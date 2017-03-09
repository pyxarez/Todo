import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import Task from '../common/Task';
import './Tasks.res/style.css';

export default class Tasks extends Component {
  static propTypes = {
    keyWord: React.PropTypes.string,
    currentCategory: React.PropTypes.string,
    changeGlobalStorage: React.PropTypes.func.isRequired,
    globalStorage: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    keyWord: ""
  }

  handleAddNewTaskClick = (taskName) => {
    const {
      globalStorage,
      currentCategory,
      changeGlobalStorage
    } = this.props;

    globalStorage.addTask(currentCategory, taskName);
    changeGlobalStorage({ globalStorage });
  }

  createTasks = () => {
    const {
      keyWord,
      currentCategory,
      globalStorage
    } = this.props;

   const taskList = globalStorage.getTasks(currentCategory);
   if (!taskList) return;

    if (taskList) {
      return taskList
              .filter((task) => task.title.toLowerCase().includes(keyWord.toLowerCase().trim()))
              .map((task, index) => <Task key={index} title={task.title} />);
    }
  }

  render() {
    const {
      currentCategory
    } = this.props;

    return (
      <div className="my-tasklist-component">
        <TextBox
          placeholder="Enter task title"
          onClick={this.handleAddNewTaskClick}/>
        <div className="todo-wrapper__task-list">
          {currentCategory && this.createTasks()}
        </div>
      </div>
    );
  }
}
