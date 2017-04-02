import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks } from '../store/actions/TaskListActions';
import { toNumberKeyValues } from '../utils/helpers';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

import EditTaskContainer from './EditTask';
import EditPageCategoryContainer from './EditPageCategory';
import Sidebar from './Sidebar';

import './EditPage.res/style.css';

export class EditPageContainer extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      taskId: PropTypes.string.isRequired,
      taskTitle: PropTypes.string.isRequired,
    }),
  }

  render() {
    const {
      tasks,
      params,
      getTasks
    } = this.props;
    const {
      categoryId,
      taskId
    } = toNumberKeyValues(params);

    if (tasks.length === 0
      && (typeof params.categoryId !== 'undefined')
    ) {
      getTasks(params.categoryId);
    }

    const task = tasks
      .find((task) => {
        return task.id === taskId
      });

    if (!task) return <NotFoundPage />;

    return (
      <div className="my-edit-page-component">
        <Header title={task.title.slice(0, 15).concat('...')} />
        <div className="main">
          <Sidebar
            categoryContainer={EditPageCategoryContainer}
            currentCategoryId={categoryId}
            currentTaskId={taskId}/>
          <EditTaskContainer
            task={task}
            categoryId={categoryId}/>
        </div>
      </div>
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
    getTasks: bindActionCreators(getTasks, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageContainer);
