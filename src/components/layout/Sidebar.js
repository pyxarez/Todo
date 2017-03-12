import React from 'react';

import './Sidebar.res/style.css';

Sidebar.propTypes = {
  childern: React.PropTypes.arrayOf(React.PropTypes.element.isRequired)
}

export default function Sidebar({children}) {
  return (
    <div className="my-sidebar-component">
      <div className="sidebar">
        {children}
      </div>
    </div>
  );
}