import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Clock />
        <div className="Buttons">
          <Button text="Click me please!!!"/>
          <Toggle />
        </div>
      </div>
    );
  }
}

export default App;
