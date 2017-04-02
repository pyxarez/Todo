import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { getCategories } from './api/api';
import { GET_CATEGORIES } from './store/constants/Category';

import MainPageContainer from './containers/MainPage.js';
import EditPageContainer from './containers/EditPage.js';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//Request categories from remote storage
getCategories().then((categories) => {
  store.dispatch({
    type: GET_CATEGORIES,
    payload: {
      categories
    }
  })
});


ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='/main' />
      <Redirect from='' to='/main' />

      <Route path="/main" component={MainPageContainer} />
      <Route path="/main/:id/:category/(:filter)" component={MainPageContainer} />
      <Route path="/edit/:categoryId/:taskId/:taskTitle" component={EditPageContainer} />
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
