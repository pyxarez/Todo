import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
import Task from '../common/Task';
import manipulateTree from '../utils/manipulateObjectTree';
import './Tasks.res/style.css';

export default class Tasks extends Component {
  handleAddNewTaskClick = (taskName) => {
    const target = this.props.currentCategory;
    const options = {
      target,
      taskName,
      action: "addTask"
    }

    this.props.newTask(options);
  }

  render() {
    const categories = this.props.categories;
    const {
      currentCategory,
      keyWord
    } = this.props;

    const createCategories = (categories) => {
     const options = {
       target: this.props.currentCategory,
       action: "getTaskList"
     }
     const taskList = manipulateTree(categories, options)

     if (taskList) {
      return taskList
        .filter((task) => task.title.toLowerCase().includes(keyWord.toLowerCase().trim()))
        .map((task, index) => <Task key={index} title={task.title} />);
    }
  }

    return (
      <div className="my-tasklist-component">
        <TextBox
          placeholder="Enter task title"
          onClick={this.handleAddNewTaskClick}/>
        <div className="todo-wrapper__task-list">
          {currentCategory && createCategories(categories)}
        </div>
      </div>
    );
  }
}
