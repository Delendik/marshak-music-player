import React from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Turbina from './components/Turbina';


function App() {
  return (
    <div className = "page">
      <div className = "page-container">
        <Logo />
        <Menu />
        <Turbina />
      </div>
    </div>
  );
}

export default App;
