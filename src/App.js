import React, { useState } from 'react';

// Components
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const ToggleHandler = () => {
    setDrawerState(!drawerState);
  };
  return (
    <div style={{ height: '100%' }}>
      <Navbar ToggleHandler={ToggleHandler} />

      <SideDrawer ToggleHandler={ToggleHandler} drawerState={drawerState} />

      {drawerState && <Backdrop ToggleHandler={ToggleHandler} />}
      <main style={{ marginTop: 64 }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
