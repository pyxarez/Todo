import React, { Component } from 'react';

import Button from '../common/Button';

import './Header.res/style.css';

export default class Header extends Component {
  render() {
    const buttonStyle = {
      top: 5,
      right: 5
    };

    return (
      <div className="Header">
        <h1 className="Header-title">To-Do List</h1>
        <label className="Header-check-done"><input type="checkbox"/>Show done</label>
        <div className="Header-filter-container">
          <input className="Header-filter" type="text" placeholder="Search" />
          <Button styles={buttonStyle} type="clear"/>
        </div>
        <div className="Header-progress-bar">
          <div className="Header-progress"></div>
        </div>
      </div>
    );
  }
}
