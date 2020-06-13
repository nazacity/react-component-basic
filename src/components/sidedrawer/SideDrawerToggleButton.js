import React from 'react';

const SideDrawerToggleButton = ({ ToggleHandler }) => {
  return (
    <button
      style={{
        height: 24,
        width: 36,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        boxSizing: 'border-box',
        outline: 'none',
      }}
      onClick={ToggleHandler}
    >
      <div
        style={{
          width: 30,
          height: 2,
          backgroundColor: 'white',
        }}
      ></div>
      <div
        style={{
          width: 30,
          height: 2,
          backgroundColor: 'white',
        }}
      ></div>
      <div
        style={{
          width: 30,
          height: 2,
          backgroundColor: 'white',
        }}
      ></div>
    </button>
  );
};

export default SideDrawerToggleButton;
