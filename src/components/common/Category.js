import React from 'react';
import { Link } from 'react-router';

import Button from '../common/Button';
import './Category.res/style.css';

Category.propTypes = {
  id: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  onExtend: React.PropTypes.oneOfType(
    [
      React.PropTypes.func,
      React.PropTypes.bool
    ]).isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.element.isRequired)
}

export default function Category({ id, title, children, onExtend }) {
  return (
    <div className="my-category-component">
      {onExtend &&
        <Button type="extend" onClick={onExtend}/>}
      <Link to={`/todo/main/${id}/${title}/`}>{title}</Link>
      {children}
    </div>
  );
}
