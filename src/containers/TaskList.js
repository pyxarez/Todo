import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addTask, getTasks } from '../actions/TaskListActions';
import { getProgress } from '../actions/ProgressActions';

import TaskList from '../components/TaskList';
import TaskContainer from './Task';

export class TaskListContainer extends Component {
  static propTypes = {
    showDone: PropTypes.bool.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      description: React.PropTypes.string.isRequired
    })),
    addTask: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired,
    getProgress: React.PropTypes.func.isRequired,
    URLParams: PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      filter: PropTypes.string
    })
  }

  handleAddNewTaskClick = (title) => {
    const {
      addTask,
      getProgress
    } = this.props;
    const id = this.props.URLParams.id;

    return addTask(id, title)
      .then(() => { getProgress();})
      .catch(e => { alert(e); });
  }

  componentWillReceiveProps = (nextProps) => {
    const nextId = nextProps.URLParams.id;
    const prevId = this.props.URLParams.id

    if ( (typeof nextId !== 'undefined') && (nextId !== prevId) ){
      this.props.getTasks(nextId);
    }
  }

  _createTasks = () => {
    const {
      showDone,
      tasks
    } = this.props;
    const {
      id: categoryId,
      filter: keyWord = ''
    } = this.props.URLParams;

    const sortedTaskList = showDone
      ? tasks
      : tasks.filter(task => !task.isDone);

    return sortedTaskList
      .filter((task) => task.title
        .toLowerCase()
        .includes(keyWord
          .toLowerCase()
          .trim()
         )
       )
      .map((task, index) => (
          <TaskContainer
            key={task.id}
            categoryId={categoryId}
            task={task}/>
        )
      );
  }

  render() {
    const { tasks } = this.props;
    return (
      <TaskList onClick={this.handleAddNewTaskClick}>
        {tasks.length > 0 && this._createTasks()}
      </TaskList>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return {
    tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    getTasks: bindActionCreators(getTasks, dispatch),
    getProgress: bindActionCreators(getProgress, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);