import showDone from './showDone';
import { TOGGLE_SHOW_DONE } from '../constants/ShowDone';

describe('showDone reducer', () => {
  it('should return the initial state', () => {
    expect(showDone(undefined, {})).toEqual(true);
  });

  it('should handle TOGGLE_SHOW_DONE', () => {
    expect(showDone(undefined, {
      type: TOGGLE_SHOW_DONE
    })).toEqual(false);

    expect(showDone(false, {
      type: TOGGLE_SHOW_DONE
    })).toEqual(true);
  });
});