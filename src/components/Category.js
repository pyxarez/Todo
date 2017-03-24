import React from 'react';
import { Link } from 'react-router';

import Button from './Button';
import './Category.res/style.css';

Category.propTypes = {
  id: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  onExtend: React.PropTypes.oneOfType(
    [
      React.PropTypes.func,
      React.PropTypes.bool
    ]).isRequired,
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
      React.PropTypes.bool,
      React.PropTypes.object
    ])
}

export default function Category({ id, title, children, onExtend }) {
  return (
    <div className="my-category-component">
      {onExtend &&
        <Button type="extend" onClick={onExtend} style={{ marginRight: '10px' }}/>}
      <Link to={`/main/${id}/${title}/`}>{title}</Link>
      {children}
    </div>
  );
}
