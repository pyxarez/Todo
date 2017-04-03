import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { checkDone } from '../store/actions/TaskListActions';
import { getProgress } from '../store/actions/ProgressActions';

import Task from '../components/Task';

export class TaskContainer extends Component {
  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    task: PropTypes.shape({
      id: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      description: React.PropTypes.string.isRequired
    }),
    checkDone: PropTypes.func.isRequired,
    getProgress: React.PropTypes.func.isRequired,
  }

  handleEditTaskClick = () => {
    const categoryId = this.props.categoryId;
    const {
      id: taskId,
      title
    } = this.props.task;

    const path = `/edit/${categoryId}/${taskId}/${title}`;
    browserHistory.push(path);
  }

  handleDoneTaskClick = () => {
    const {
      checkDone,
      getProgress,
      categoryId
    } = this.props;
    const { id } = this.props.task;

    return checkDone(categoryId, id)
      .then(() => { getProgress(); });
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

const mapDispatchToProps = (dispatch) => {
  return {
    checkDone: bindActionCreators(checkDone, dispatch),
    getProgress: bindActionCreators(getProgress, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TaskContainer);
