import { GET_PROGRESS } from '../constants/Progress';

const initialState = '0%';

const progress = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS:
      return action.payload.progress;
    default:
      return state;
  }
}

export default progress;