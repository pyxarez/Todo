import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainPage from './pages/MainPage.js';
import EditPage from './pages/EditPage.js';
import './index.res/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainPage} />
    <Route path="/:category/:filter" component={MainPage} />
    <Route path="/edit" component={EditPage} />
    <Route path="*" component={MainPage} />
  </Router>
  ),
  document.getElementById('root')
);
