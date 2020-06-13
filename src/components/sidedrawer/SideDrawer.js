import React from 'react';

const SideDrawer = ({ ToggleHandler }) => {
  return (
    <nav
      style={{
        height: '100%',
        background: 'white',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        zIndex: 101,
      }}
    >
      <ul
        style={{
          height: '100%',
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <li
          style={{
            margin: '0.5rem 0',
          }}
          onClick={ToggleHandler}
        >
          <a
            style={{
              textDecoration: 'none',
              color: '#521751',
              fontSize: '1.2rem',
            }}
            href="#"
          >
            Product
          </a>
        </li>
        <li
          style={{
            margin: '0.5rem 0',
          }}
          onClick={ToggleHandler}
        >
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: '#521751',
              fontSize: '1.2rem',
            }}
          >
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
