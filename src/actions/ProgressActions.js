import {
  GET_PROGRESS
} from '../constants/Progress';

import * as api from '../api/api';

export const getProgress = () => {
  return (dispatch) => {
    api.getProgress()
      .then((progress) => {
        dispatch({
          type: GET_PROGRESS,
          payload: {
            progress
          }
        })
      });
  };
};