import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Button from '../common/Button';
import './Header.res/style.css';

export default class Header extends Component {
  static propTypes = {
    currentCategory: React.PropTypes.string
  }

  handleClearClick = () => {
    this.textInput.value = "";

    const {
      id,
      currentCategory
    } = this.props;
    const path = `/${id}/${currentCategory}/`;

    browserHistory.push(path);
  }

  handleInputUpdate = (e) => {
    const {
      id,
      currentCategory
    } = this.props;
    const path = `/${id}/${currentCategory}/${e.target.value}`;

    browserHistory.push(path);
  }

  render() {
    const progress = this.props.globalStorage.getProgress();;

    return (
      <div className="my-header-component">
        <h1 className="title">To-Do List</h1>
        <label className="checkbox"><input type="checkbox"/>Show done</label>
        <div className="filter">
          <input
            ref={(input) => { this.textInput = input }}
            onChange={this.handleInputUpdate}
            className="filter-input"
            type="text"
            placeholder="Search" />
          <Button onClick={this.handleClearClick} type="clear"/>
        </div>
        <div className="progress-bar">
          <div style={ progress && {width: progress}} className="progress-bar__state"></div>
        </div>
      </div>
    );
  }
}
