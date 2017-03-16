import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  ADD_NESTED_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
  CHANGE_TASK_LOCATION
} from '../constants/Category';

import * as api from '../api/api';

//Not used yet
export function getCategories() {
  return (dispatch) => {
    api.getCategories()
      .then((categories) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: {
            categories
          }
        });
      });
  };
};

export function addCategory(title) {
  return (dispatch) => {
    api.addCategory(title)
      .then((response) => { 
        dispatch({
          type: ADD_CATEGORY,
          payload: {
            categoryId: response,
            title
          }
        });
      });
  };
};

export function addNestedCategory(parentCategoryId, title) {
  return (dispatch) => {
    api.addNestedCategory(parentCategoryId, title)
      .then((response) => {
        dispatch({
          type: ADD_NESTED_CATEGORY,
          payload: {
            parentCategoryId,
            categoryId: response,
            title
          }
        });
      });
  };
};

export function deleteCategory(categoryId) {
  return (dispatch) => {
    api.deleteCategory(categoryId)
      .then((response) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: {
            categoryId: response
          }
        });
      });
  };
};

export function renameCategory(categoryId, title){
  return (dispatch) => {
    api.renameCategory(categoryId, title)
      .then((response) => {
        dispatch({
          type: RENAME_CATEGORY,
          payload: {
            categoryId: response,
            title
          }
        });
      });
  };
};

export function changeTaskLocation(prevLocation, newLocation, taskId) {
  return (dispatch) => {
    api.changeTaskLocation(prevLocation, newLocation, taskId)
      .then((response) => {
        dispatch({
          type: CHANGE_TASK_LOCATION,
          payload: {
            prevLocation,
            newLocation,
            taskId
          }
        });
      });
  };
};
