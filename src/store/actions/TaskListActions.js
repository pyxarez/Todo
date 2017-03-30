import {
  ADD_TASK,
  CHECK_DONE,
  GET_TASKS,
  SAVE_TASK_CHANGES
} from '../constants/TaskList';

import * as api from '../../api/api';

const gettingEmptyTaskList = () => {
  return {
    type: GET_TASKS,
    payload: {
      tasks: []
    }
  }
};

const gettingTasksSuccess = (tasks) => {
  return {
    type: GET_TASKS,
    payload: {
      tasks
    }
  }
};

const addingTaskSuccess = (taskId, title) => {
  return {
    type: ADD_TASK,
    payload: {
      taskId,
      title
    }
  }
};

const ckeckingDoneSuccess = (taskId) => {
  return {
    type: CHECK_DONE,
    payload: {
      taskId
    }
  }
};

const savingTaskChangesSuccess = (chengedTaskData) => {
  return {
    type: SAVE_TASK_CHANGES,
    payload: chengedTaskData
  }
};

export function getTasks(categoryId) {
  return (dispatch) => {
    if (categoryId === null) {
      dispatch( gettingEmptyTaskList() );
    }

    return api.getTasks(categoryId)
      .then((tasks) => {
        dispatch( gettingTasksSuccess(tasks) );
      });
  };
};

export function addTask(categoryId, title) {
  return (dispatch) => {
    return api.addTask(categoryId, title)
      .then((taskId) => {
        dispatch( addingTaskSuccess(taskId, title) );
        return taskId;
      });
  };
};

export function checkDone(categoryId, taskId) {
  return (dispatch) => {
    return api.checkDone(categoryId, taskId)
      .then((taskId) => {
        dispatch( ckeckingDoneSuccess(taskId) );
      });
  };
};

export function saveTaskChanges(options) {
  return (dispatch) => {
    return api.saveTaskChanges(options)
      .then((chengedTaskData) => {
        dispatch( savingTaskChangesSuccess(chengedTaskData) );
      });
  };
};
