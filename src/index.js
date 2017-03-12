import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainPage from './pages/MainPage.js';
import EditPage from './pages/EditPage.js';
import './index.res/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="todo" component={MainPage} />
    <Route path="todo/main" component={MainPage} />
    <Route path="todo/main/:id" component={MainPage} />
    <Route path="todo/main/:id/:category" component={MainPage} />
    <Route path="todo/main/:id/:category/:filter" component={MainPage} />
    <Route path="todo/edit" component={EditPage} />
    <Route path="todo/edit/:id" component={EditPage} />
  </Router>
  ),
  document.getElementById('root')
);
