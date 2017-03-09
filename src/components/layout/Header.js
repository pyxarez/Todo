import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Button from '../common/Button';
import './Header.res/style.css';

export default class Header extends Component {
  state = {
    filter: " "
  }

  handleInputUpdate = (e) => {
    const currentCategory = this.props.currentCategory;
    const path = `/${currentCategory}/${e.target.value || " "}`;
    browserHistory.push(path);
  }

  render() {

    return (
      <div className="my-header-component">
        <h1 className="title">To-Do List</h1>
        <label className="checkbox"><input type="checkbox"/>Show done</label>
        <div className="filter">
          <input onChange={this.handleInputUpdate} className="filter-input" type="text" placeholder="Search" />
          <Button type="clear"/>
        </div>
        <div className="progress-bar">
          <div className="progress-bar__state"></div>
        </div>
      </div>
    );
  }
}
