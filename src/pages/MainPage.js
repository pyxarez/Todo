import React from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import TextBox from '../components/forms/TextBox';
import './MainPage.res/style.css';

function MainPage() {
  return (
    <div className="my-main-page-component">
      <Header />
      <div className="main">
        <Sidebar inputRequired="true" />
        <div className="todo-wrapper">
          <TextBox placeholder="Add task" />
          <div className="todo-wrapper__todo-list"></div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;