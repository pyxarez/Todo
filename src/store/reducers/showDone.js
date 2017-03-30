import { TOGGLE_SHOW_DONE } from '../constants/ShowDone';

const initialState = true;

const showDone = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_DONE:
      return !state;
    default:
      return state;
  }
}

export default showDone;