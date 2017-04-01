import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getCategories,
  addCategory,
  addNestedCategory,
  deleteCategory,
  renameCategory,
  changeTaskLocation
} from './CategoryActions';
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  ADD_NESTED_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
  CHANGE_TASK_LOCATION
} from '../constants/Category';

import {
  ADD_TASK
} from '../constants/TaskList';
import {
  addTask
} from './TaskListActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async CategoryActions', () => {
  it('should recieve categories from the remote storage and \
    create action with recieved categories', async () => {
    const expectedAction = {
      type: GET_CATEGORIES,
      payload: {
        categories: []
      }
    };
    const store = mockStore({ categories: [] });
    
    try {
      await store.dispatch(getCategories());

      expect(store.getActions().pop()).toEqual(expectedAction);
    } catch(e) {
      throw e;
    }
  });

  it('should add category to the remote storage and create action with \
    recieved id', async () => {
    const newCategoryTitle = 'Philosophy';
    const store = mockStore({ categories: [] });

    try {
      const categoryId = await store.dispatch(addCategory(newCategoryTitle));

      expect(store.getActions().pop()).toEqual({
        type: ADD_CATEGORY,
        payload: {
          categoryId,
          title: newCategoryTitle
        }
      });
    } catch(e) {
      throw e;
    }
  });

  it('should add nested category to the remote storage and create action \
    with recieved id', async () => {
    const newCategoryTitle = 'Awesome title';
    const newNestedCategoryTitle = 'Second awesome title:)';
    const store = mockStore({ categories: [] });

    try {
      const parentCategoryId = await store.dispatch(addCategory(newCategoryTitle));
      const nestedCategoryId = await store.dispatch(addNestedCategory(parentCategoryId, newNestedCategoryTitle));

      expect(store.getActions().pop()).toEqual({
        type: ADD_NESTED_CATEGORY,
        payload: {
          parentCategoryId,
          categoryId: nestedCategoryId,
          title: newNestedCategoryTitle
        }
      });
    } catch (e) {
      throw e;
    }
  });

  it('should delete category to the remote storage and create action \
    with id of deleted category', async () => {
    const newCategoryTitle = 'Awesome title';
    const store = mockStore({ categories: [] });

    try {
      const categoryId = await store.dispatch(addCategory(newCategoryTitle));
      await store.dispatch(deleteCategory(categoryId));

      expect(store.getActions().pop()).toEqual({
        type: DELETE_CATEGORY,
        payload: {
          categoryId
        }
      });
    } catch(e) {
      throw e;
    }
  });

  it('should rename category in the remote storage and create action \
    with id of this category', async () => {
    const newCategoryTitle = 'Awesome title';
    const newestCategoryTitle = 'Second awesome title:)';
    const store = mockStore({ categories: [] });

    try {
      const categoryId = await store.dispatch(addCategory(newCategoryTitle));
      await store.dispatch(renameCategory(categoryId, newestCategoryTitle));

      expect(store.getActions().pop()).toEqual({
        type: RENAME_CATEGORY,
        payload: {
          categoryId,
          title: newestCategoryTitle
        }
      });
    } catch(e) {
      throw e;
    }
  });

  it('should change location of task in the remote storage \
    and create action with prev and next location', async () => {
    const newCategoryTitle = 'Awesome title';
    const newestCategoryTitle = 'Second awesome title:)';
    const taskTitle = 'Title for task';
    const store = mockStore({ tasks: [] });
  
    try {
      const prevLocation = await store.dispatch(addCategory(newCategoryTitle));
      const newLocation = await store.dispatch(addCategory(newestCategoryTitle));
      const taskId = await store.dispatch(addTask(prevLocation, newLocation));
      await store.dispatch(changeTaskLocation(prevLocation, newLocation, taskId));

      expect(store.getActions().pop()).toEqual({
        type: CHANGE_TASK_LOCATION,
        payload: {
          prevLocation,
          newLocation,
          taskId
        }
      });
    } catch(e) {
      throw e;
    }
  });
});