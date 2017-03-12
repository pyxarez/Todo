import React from 'react';

import './Header.res/style.css';

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.element)
}

export default function Header({title, children}) {
  return (
    <div className="my-header-component">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
} 
