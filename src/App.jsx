import React from 'react';
import Articles from "./components/Articles.jsx";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Logo from './components/Logo';
import Menu from './components/Menu';
import Turbina from './components/Turbina';
import Audio from "./components/Audio" /* плеер */

function App() {
  return (
    <div className="page">
      <div className="page-container">
        <Logo/>
        <Menu/>
        <Turbina/>
        <div className="App"> {/* плеер */}
          <Audio />
        </div>
        <div className="content">
          <Articles/>
          <Form/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
