import {
  ADD_TASK,
  CHECK_DONE,
  GET_TASKS,
  SAVE_TASK_CHANGES
} from '../constants/TaskList';

import * as api from '../api/api';

export function getTasks(taskId) {
  return (dispatch) => {
    if (taskId === null) {
      dispatch({
        type: GET_TASKS,
        payload: {
          tasks: []
        }
      });
    }

    api.getTasks(taskId)
      .then((tasks) => {
        dispatch({
          type: GET_TASKS,
          payload: {
            tasks
          }
        });
      });
  };
};

export function addTask(categoryId, title) {
  return (dispatch) => {
    api.addTask(categoryId, title)
      .then((taskId) => {
        if (taskId === false) {
          alert('Выберите категорию');
          return;
        }

        dispatch({
          type: ADD_TASK,
          payload: {
            taskId,
            title
          }
        });
      });
  };
};

export function checkDone(categoryId, taskId) {
  return (dispatch) => {
    api.checkDone(categoryId, taskId)
      .then((taskId) => {
        dispatch({
          type: CHECK_DONE,
          payload: {
            taskId
          }
        });
      });
  };
};

export function saveTaskChanges(options) {
  return (dispatch) => {
    api.saveTaskChanges(options)
      .then((newTask) => {
        dispatch({
          type: SAVE_TASK_CHANGES,
          payload: newTask
        });
      });
  };
};
