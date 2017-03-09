import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from '../common/Button';
import './Category.res/style.css';

export default class Category extends Component {
  state = { extended: true }

  render() {
    const {
      title,
      mayExtends,
      onExtendClick,
      onClick
    } = this.props;

    return (
      <div className="my-category-component">
        {mayExtends &&
          <Button type="extend" onClick={onExtendClick}/>}
        <Link to={`/${title}/ `}>{title}</Link>
        <Button
          type="edit"
          categoryName={title}
          onClick={onClick}/>
        <Button
          type="delete"
          onClick={onClick}
          categoryName={title}/>
        <Button
          onClick={onClick}
          type="add"
          categoryName={title}/>
      </div>
    );
  }
}
