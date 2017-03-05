import React, { Component } from 'react';

import TextBox from '../forms/TextBox';
// import Category from '../common/Category';

import './Sidebar.res/style.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <TextBox />
      </div>
    );
  }
}
