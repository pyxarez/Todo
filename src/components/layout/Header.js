import React, { Component } from 'react';

import Button from '../common/Button';
import './Header.res/style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="my-header-component">
        <h1 className="title">To-Do List</h1>
        <label className="checkbox"><input type="checkbox"/>Show done</label>
        <div className="filter">
          <input className="filter-input" type="text" placeholder="Search" />
          <Button type="clear"/>
        </div>
        <div className="progress-bar">
          <div className="progress-bar__state"></div>
        </div>
      </div>
    );
  }
}
