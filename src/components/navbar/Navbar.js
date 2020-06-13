import React, { useState } from 'react';
import SideDrawerToggleButton from '../sidedrawer/SideDrawerToggleButton';

import './navbar.css';

const Navbar = ({ ToggleHandler }) => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__toggle-button">
          <SideDrawerToggleButton ToggleHandler={ToggleHandler} />
        </div>
        <div className="navbar__logo">
          <a href="#">THE LOGO</a>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="navbar__navigation-items">
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
