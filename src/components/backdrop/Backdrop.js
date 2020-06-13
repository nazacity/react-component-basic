import React from 'react';
import './backdrop.css';

const Backdrop = ({ ToggleHandler }) => {
  return <div className="backdrop" onClick={ToggleHandler}></div>;
};

export default Backdrop;
