import React from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import TextBox from '../components/forms/TextBox';
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