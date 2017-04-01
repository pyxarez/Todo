import React from 'react';

import './Header.res/style.css';

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.bool,
      React.PropTypes.object
    ]
  ),
}

export default function Header({title, children}) {
  return (
    <header className="my-header-component">
      <h1 className="title">{title}</h1>
    {children}
    </header>
  );
}
