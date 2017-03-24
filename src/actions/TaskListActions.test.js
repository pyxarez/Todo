import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addCategory
} from './CategoryActions';
import {
  ADD_CATEGORY
} from '../constants/Category';

import {
  ADD_TASK,
  CHECK_DONE,
  GET_TASKS,
  SAVE_TASK_CHANGES
} from '../constants/TaskList';
import {
  getTasks,
  addTask,
  checkDone,
  saveTaskChanges
} from './TaskListActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async TaskListActions tests', () => {
  describe('getTasks action creators', () => {
    it('should get tasks from the server and create action with \
      them', async () => {
      const categoryTitle = 'Girls';
      const taskTitle = 'Vassa';
      const store = mockStore({ tasks: [] });

      try {
        const categoryId = await store.dispatch(addCategory(categoryTitle));
        const taskId = await store.dispatch(addTask(categoryId, taskTitle));
        await store.dispatch(getTasks(categoryId));

        expect(store.getActions().pop()).toEqual({
          type: GET_TASKS,
          payload: {
            tasks:[
              {
                id: taskId,
                title: taskTitle,
                isDone: false,
                description: ""
              }
            ]
          }
        });
      } catch(e) {
        throw e;
      }
    });

    it('should create empty tasklist and return action with it', () => {
      const store = mockStore({ tasks: [] });

      store.dispatch(getTasks(null));

      expect(store.getActions().pop()).toEqual({
        type: GET_TASKS,
        payload: {
          tasks:[]
        }
      });
    });
  });

  it('should add task to the server and create action with \
    it', async () => {
    const categoryTitle = 'Girls';
    const title = 'Find myself';
    const store = mockStore({ tasks: [] });

    try {
      const categoryId = await store.dispatch(addCategory(categoryTitle));
      const taskId = await store.dispatch(addTask(categoryId, title));

      expect(store.getActions().pop()).toEqual({
        type: ADD_TASK,
        payload: {
          taskId,
          title
        }
      });
    } catch(e) {
      throw e;
    }
  });

  it('should toggle done state of task on server \
    and create action with id of toggled task', async () => {
    const categoryTitle = 'Unbelievable category title';
    const taskTitle = 'The worstest title in the world';

    const store = mockStore({ tasks: [] });

    try {
      const categoryId = await store.dispatch(addCategory(categoryTitle));
      const taskId = await store.dispatch(addTask(categoryId, taskTitle));
      await store.dispatch(checkDone(categoryId, taskId));

      expect(store.getActions().pop()).toEqual({
        type: CHECK_DONE,
        payload: {
          taskId
        }
      });
    } catch(e){
      throw e;
    }
  });

  it('should save task changes on the server \
    and create action with new task data', async () => {
    const categoryTitle = 'Unbelievable category title';
    const taskTitle = 'The worstest title in the world';

    const store = mockStore({ tasks: [] });

    try {
      const categoryId = await store.dispatch(addCategory(categoryTitle));
      const taskId = await store.dispatch(addTask(categoryId, taskTitle));
      const options = {
        id: taskId,
        categoryId,
        title: 'Buy courier',
        isDone: true,
        description: 'Klara have stolen koralls from Karl'
      }
      await store.dispatch(saveTaskChanges(options));

      expect(store.getActions().pop()).toEqual({
        type: SAVE_TASK_CHANGES,
        payload: {
          id: taskId,
          title: 'Buy courier',
          isDone: true,
          description: 'Klara have stolen koralls from Karl'
        }
      });
    } catch(e) {
      throw e;
    }
  });
});
