import {
  GET_PROGRESS
} from '../constants/Progress';

import * as api from '../../api/api';

const gettingProgressSuccess = (progress) => {
  return {
    type: GET_PROGRESS,
    payload: {
      progress
    }
  };
};

export const getProgress = () => {
  return (dispatch) => {
    return api.getProgress()
      .then((progress) => {
        dispatch( gettingProgressSuccess(progress) );
      });
  };
};