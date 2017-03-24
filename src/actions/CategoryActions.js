import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  ADD_NESTED_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
  CHANGE_TASK_LOCATION
} from '../constants/Category';

import * as api from '../api/api';

const gettingCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: {
      categories
    }
  };
};

const addingCategorySuccess = (categoryId, title) => {
  return {
    type: ADD_CATEGORY,
    payload: {
      categoryId,
      title
    }
  };
};

const addingNestedCategorySuccess = (parentCategoryId, categoryId, title) => {
  return {
    type: ADD_NESTED_CATEGORY,
    payload: {
      parentCategoryId,
      categoryId,
      title
    }
  };
};

const deletingCategorySuccess = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    payload: {
      categoryId
    }
  };
};

const renamingCategorySuccess = (categoryId, title) => {
  return {
    type: RENAME_CATEGORY,
    payload: {
      categoryId,
      title
    }
  };
};

const changingTaskLocationSuccess = (prevLocation, newLocation, taskId) => {
  return {
    type: CHANGE_TASK_LOCATION,
    payload: {
      prevLocation,
      newLocation,
      taskId
    }
  }
}

//Not used yet
export function getCategories() {
  return (dispatch) => {
    return api.getCategories()
      .then((categories) => {
        dispatch(gettingCategoriesSuccess(categories));
      });
  };
};

export function addCategory(title) {
  return (dispatch) => {
    return api.addCategory(title)
      .then((categoryId) => { 
        dispatch(addingCategorySuccess(categoryId, title));

        return categoryId;
      });
  };
};

export function addNestedCategory(parentCategoryId, title) {
  return (dispatch) => {
    return api.addNestedCategory(parentCategoryId, title)
      .then((nestedCategoryId) => {
        dispatch(
          addingNestedCategorySuccess(parentCategoryId, nestedCategoryId, title)
        );

        return nestedCategoryId;
      });
  };
};

export function deleteCategory(categoryId) {
  return (dispatch) => {
    return api.deleteCategory(categoryId)
      .then((categoryId) => {
        dispatch(deletingCategorySuccess(categoryId));

        return categoryId;
      });
  };
};

export function renameCategory(categoryId, title){
  return (dispatch) => {
    return api.renameCategory(categoryId, title)
      .then(() => {
        dispatch(renamingCategorySuccess(categoryId, title));

        return categoryId;
      });
  };
};

export function changeTaskLocation(prevLocation, newLocation, taskId) {
  return (dispatch) => {
    return api.changeTaskLocation(prevLocation, newLocation, taskId)
      .then((response) => {
        dispatch(
          changingTaskLocationSuccess(prevLocation, newLocation, taskId)
        );

        return {
          prevLocation,
          newLocation,
          taskId
        }
      });
  };
};
