import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Button from './Button';
import './Filter.res/style.css';

export default class Filter extends Component {
  static propTypes = {
    URLParams: React.PropTypes.shape({
      id: React.PropTypes.number,
      category: React.PropTypes.string,
      filter: React.PropTypes.string
    })
  }

  handleClearClick = () => {
    this.textInput.value = '';

    const {
      id,
      category
    } = this.props.URLParams;

    if ((id !== undefined) && category) {
      const path = `/main/${id}/${category}/`;
      browserHistory.push(path);
    }
  }

  handleInputUpdate = (e) => {
    const {
      id,
      category
    } = this.props.URLParams;

    if ((id !== undefined) && category) {
      const path = `/main/${id}/${category}/${e.target.value}`;
      browserHistory.push(path);
    }
  }

  render() {
    return (
      <div className="my-filter-component">
        <input
          ref={(input) => { this.textInput = input }}
          onChange={this.handleInputUpdate}
          className="filter__input"
          type="text"
          placeholder="Search"/>
        <Button onClick={this.handleClearClick} type="clear"/>
      </div>
    );
  }
}