import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainPage from './pages/MainPage.js';
import EditPage from './pages/EditPage.js';
import DataStorage from './components/utils/DataStorage';
import './index.res/index.css';

const globalStorage = DataStorage.of();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" gs={globalStorage} component={MainPage} /> 
    <Route path="/todo" gs={globalStorage} component={MainPage} /> 
    <Route path="/todo/main" gs={globalStorage}  component={MainPage} />
    <Route path="/todo/main/:id" gs={globalStorage} component={MainPage} />
    <Route path="/todo/main/:id/:category" gs={globalStorage} component={MainPage} />
    <Route path="/todo/main/:id/:category/:filter" gs={globalStorage} component={MainPage} />
    <Route path="/todo/edit" gs={globalStorage} component={EditPage} />
    <Route path="/todo/edit/:categoryId/:taskId/:title" gs={globalStorage} component={EditPage} />
  </Router>
  ),
  document.getElementById('root')
);
