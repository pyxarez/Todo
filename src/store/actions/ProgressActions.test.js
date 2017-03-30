import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getProgress } from './ProgressActions';
import { GET_PROGRESS } from '../constants/Progress';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async ProgressActions', () => {
  it('should recieve progress from remote storage and create\
    action GET_PROGRESS', async () => {
    const expectedActions = [
      {
        type: GET_PROGRESS,
        payload: {
          progress: expect.any(String)
        }
      }
    ];
    const store = mockStore({ progress: '0%' });

    try {
      await store.dispatch(getProgress());

      expect(store.getActions()).toEqual(expectedActions);
    } catch(e) {
      throw e;
    }
  });
});