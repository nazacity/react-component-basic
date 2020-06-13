import React from 'react';
import './sidedrawer.css';

const SideDrawer = ({ ToggleHandler, drawerState }) => {
  return (
    <nav className={`sidebar-drawer ${drawerState && 'open'}`}>
      <ul>
        <li onClick={ToggleHandler}>
          <a href="#">Product</a>
        </li>
        <li onClick={ToggleHandler}>
          <a href="#">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
