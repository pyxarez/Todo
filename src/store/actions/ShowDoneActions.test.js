import toggleShowDone from './ShowDoneActions';
import { TOGGLE_SHOW_DONE } from '../constants/ShowDone';

describe('ShowDoneActions', () => {
  it('should create an action to toggle showDone state', () => {
    const expectedAction = {
      type: TOGGLE_SHOW_DONE
    };
    expect(toggleShowDone()).toEqual(expectedAction);
  });
});