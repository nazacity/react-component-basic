import React, { useState } from 'react';
import SideDrawerToggleButton from '../sidedrawer/SideDrawerToggleButton';

const Navbar = ({ ToggleHandler }) => {
  const [linkHover, setLinkHover] = useState('white');
  const [linkHover1, setLinkHover1] = useState('white');
  return (
    <header
      style={{
        position: 'fixed',
        width: '100%',
        background: '#521751',
        height: 56,
        top: 0,
        left: 0,
      }}
    >
      <nav
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <div>
          <SideDrawerToggleButton ToggleHandler={ToggleHandler} />
        </div>
        <div>
          <a
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              marginLeft: '1rem',
            }}
          >
            THE LOGO
          </a>
        </div>
        <div style={{ flex: 1 }}></div>
        <div>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
            }}
          >
            <li
              style={{
                padding: '0 0.5rem',
                margin: '0 10px',
              }}
              onMouseOver={() => {
                setLinkHover('orange');
              }}
              onMouseLeave={() => {
                setLinkHover('white');
              }}
            >
              <a
                href="#"
                style={{
                  color: linkHover,
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                }}
              >
                Product
              </a>
            </li>
            <li
              style={{
                padding: '0 0.5rem',
                margin: '0 10px',
              }}
              onMouseOver={() => {
                setLinkHover1('orange');
              }}
              onMouseLeave={() => {
                setLinkHover1('white');
              }}
            >
              <a
                href="/"
                style={{
                  color: linkHover1,
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                }}
              >
                Users
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
