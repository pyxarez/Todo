import progress from './progress';
import { GET_PROGRESS } from '../constants/Progress';

describe('progress reducer', () => {
  it('should return the initial state', () => {
    expect(progress(undefined, {})).toEqual('0%');
  });

  it('should handle GET_PROGRESS', () => {
    expect(progress(undefined, {
      type: GET_PROGRESS,
      payload: {
        progress: '20%'
      }
    })).toEqual('20%');

    expect(progress('80%', {
      type: GET_PROGRESS,
      payload: {
        progress: '20%'
      }
    })).toEqual('20%');
  });
});