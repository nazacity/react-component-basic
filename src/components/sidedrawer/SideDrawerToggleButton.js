import React from 'react';
import './sidedrawertogglebutton.css';

const SideDrawerToggleButton = ({ ToggleHandler }) => {
  return (
    <button className="toggle-button" onClick={ToggleHandler}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>
  );
};

export default SideDrawerToggleButton;
