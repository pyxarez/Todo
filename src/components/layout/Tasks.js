import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import Task from '../common/Task';
import './Tasks.res/style.css';

export default class Tasks extends Component {
  static propTypes = {
    keyWord: React.PropTypes.string,
    id: React.PropTypes.string,
    changeGlobalStorage: React.PropTypes.func.isRequired,
    globalStorage: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    keyWord: ""
  }

  handleAddNewTaskClick = (title) => {
    const {
      id,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    globalStorage.addTask(id, title);
    changeGlobalStorage({ globalStorage });
  }

  handleDoneTaskClick = (targetTask) => {
    const {
      taskList,
      globalStorage,
      changeGlobalStorage
    } = this.props;

    taskList.find(task => task.id === targetTask)
            .toggleDone();

    changeGlobalStorage({globalStorage});
  }

  createTasks = () => {
    const {
      keyWord,
      taskList
    } = this.props;

    return taskList
              .filter((task) => task.title.toLowerCase().includes(keyWord.toLowerCase().trim()))
              .map((task, index) => {
                return (
                  <Task key={index} handleDoneTaskClick={this.handleDoneTaskClick} id={task.id} isDone={task.isDone}>
                    {task.title}
                  </Task>);
              });
  }

  render() {
    const {
      taskList
    } = this.props;

    return (
      <div className="my-tasklist-component">
        <TextBox
          placeholder="Enter task title"
          onClick={this.handleAddNewTaskClick}/>
        <div className="todo-wrapper__task-list">
          {(taskList && taskList.length > 0) && this.createTasks()}
        </div>
      </div>
    );
  }
}
