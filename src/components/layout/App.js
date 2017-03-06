import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import TextBox from '../forms/TextBox';
import './App.res/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Sidebar />
        <div className="Todo-container">
          <TextBox placeholder="Text input with button"/>
          <div className="Todos"></div>
        </div>
      </div>
    </div>
  )
}

export default App;