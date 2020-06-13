import React from 'react';

const Backdrop = ({ ToggleHandler }) => {
  return (
    <div
      style={{
        postion: 'fixed',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 100,
      }}
      onClick={ToggleHandler}
    ></div>
  );
};

export default Backdrop;
