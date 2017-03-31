import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
// import localStorageCaller from './middlewares/localStorageCaller';
import thunk from 'redux-thunk';

export default (initialState) => {
  // const logger = createLogger();

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk));
}
