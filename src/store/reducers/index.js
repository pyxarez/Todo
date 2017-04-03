import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import tasks from './tasks';
import progress from './progress';
import showDone from './showDone';

const rootReducer = combineReducers({
  categories,
  tasks,
  progress,
  showDone,
  routing: routerReducer
});

export default rootReducer;
