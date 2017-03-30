import {
  ADD_TASK,
  CHECK_DONE,
  GET_TASKS,
  SAVE_TASK_CHANGES,
} from '../constants/TaskList';
import {
  CHANGE_TASK_LOCATION,
} from '../constants/Category';
import tasks from './tasks';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('tasks reducer', () => {
  const initialState = [
    {
      id: 0,
      title: 'Bip bip motherfucker',
      isDone: false,
      description: "That's a description of this taks",
    },
    {
      id: 1,
      title: 'God damn, i"m so awesome title',
      isDone: true,
      description: 'I have no ideas for this description, sry'
    }
  ];

  it('should return the initial state', () => {
    expect(
      tasks(undefined, {})
    ).toEqual([]);
  });

  it('should handle GET_TASKS action', () => {
    expect(
      tasks(undefined, {
        type: GET_TASKS,
        payload: {
          tasks: [
            {
              id: 0,
              title: '123',
              isDone: true,
              description: '54321'
            }
          ]
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: '123',
          isDone: true,
          description: '54321'
        }
      ]
    );
    
    expect(
      tasks(initialState, {
        type: GET_TASKS,
        payload: {
          tasks: [
            {
              id: 0,
              title: '123',
              isDone: true,
              description: '54321'
            }
          ]
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: '123',
          isDone: true,
          description: '54321'
        }
      ]
    );
  });

  it('should handle ADD_TASK', () => {
    expect(
      tasks(undefined, {
        type: ADD_TASK,
        payload: {
          taskId: 0,
          title: '123'
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: '123',
          isDone: false,
          description: ""
        }
     ]
    );

    expect(
      tasks(initialState, {
        type: ADD_TASK,
        payload: {
          taskId: 3,
          title: '123'
        }
      })
    ).toEqual(
      [
        {
          id: 3,
          title: '123',
          isDone: false,
          description: ''
        },
        {
          id: 0,
          title: 'Bip bip motherfucker',
          isDone: false,
          description: "That's a description of this taks",
        },
        {
          id: 1,
          title: 'God damn, i"m so awesome title',
          isDone: true,
          description: 'I have no ideas for this description, sry'
        }
      ]
    );
  });

  it('should handle CHECK_DONE', () => {
    expect(
      tasks(initialState, {
        type: CHECK_DONE,
        payload: {
          taskId: 0
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: 'Bip bip motherfucker',
          isDone: true,
          description: "That's a description of this taks",
        },
        {
          id: 1,
          title: 'God damn, i"m so awesome title',
          isDone: true,
          description: 'I have no ideas for this description, sry'
        }
      ]
    );
  });

  it('should handle CHANGE_TASK_LOCATION', () => {
    expect(
      tasks(initialState, {
        type: CHANGE_TASK_LOCATION,
        payload: {
          taskId: 0
        }
      })
    ).toEqual(
      [
        {
          id: 1,
          title: 'God damn, i"m so awesome title',
          isDone: true,
          description: 'I have no ideas for this description, sry'
        }
      ]
    );
  });

  it('should handle SAVE_TASK_CHANGES', () => {
    expect(
      tasks(initialState, {
        type: SAVE_TASK_CHANGES,
        payload: {
          id: 0,
          title: 'New title',
          isDone: true,
          description: 'New description'
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: 'New title',
          isDone: true,
          description: 'New description'
        },
        {
          id: 1,
          title: 'God damn, i"m so awesome title',
          isDone: true,
          description: 'I have no ideas for this description, sry'
        }
      ]
    );
  });
});