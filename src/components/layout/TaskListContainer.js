import React, { Component } from 'react';

import TaskList from './TaskList';
import TaskContainer from '../common/TaskContainer';

export default class TaskListContainer extends Component {
  static propTypes = {
    showDone: React.PropTypes.bool.isRequired,
    taskList: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.node.isRequired,
      title: React.PropTypes.string.isRequired,
      isDone: React.PropTypes.bool.isRequired
    })),
    handleAddNewTaskClick: React.PropTypes.func.isRequired,
    handleDoneTaskClick: React.PropTypes.func.isRequired,
    URLParams: React.PropTypes.shape({
      id: React.PropTypes.string,
      category: React.PropTypes.string,
      filter: React.PropTypes.string
    })
  }

  handleAddNewTaskClick = (title) => {
    const handleAddNewTaskClick = this.props.handleAddNewTaskClick;
    const id = this.props.URLParams.id;
    
    handleAddNewTaskClick(id, title);
  }

  createTasks = () => {
    const {
      showDone,
      taskList,
      handleDoneTaskClick
    } = this.props;
    const keyWord = this.props.URLParams.filter || "";

    const newTaskList = !showDone
                        ? taskList.filter(task => !task.isDone)
                        : taskList;

    return newTaskList
            .filter((task) => task.title.toLowerCase().includes(keyWord.toLowerCase().trim()))
            .map((task, index) => {
              return (
                <TaskContainer
                  key={task.id}
                  task={task}
                  handleDoneTaskClick={handleDoneTaskClick}/>
              );
            });
  }

  render() {
    return (
      <TaskList handleAddNewTaskClick={this.handleAddNewTaskClick}>
        {this.createTasks()}
      </TaskList>
    );
  }
}
