import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Button from './Button';
import './Category.res/style.css';

Category.propTypes = {
  id: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onExtend: PropTypes.oneOfType(
    [
      PropTypes.func,
      PropTypes.bool
    ]).isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element.isRequired),
      PropTypes.bool,
      PropTypes.object
  ])
}

export default function Category({ id, title, children, onExtend }) {
  return (
    <div className="my-category-component">
      {onExtend &&
        <Button type="extend" onClick={onExtend}/>}
      <Link to={`/main/${id}/${title}/`}>{title}</Link>
      {children}
    </div>
  );
}
