import React from 'react';
import Articles from "./components/Articles.jsx";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Logo from './components/Logo';
import Menu from './components/Menu';
import Turbina from './components/Turbina';
import Audio from "./components/Audio" /* плеер */
import Audio2 from "./components/Audio2"

function App() {
  return (
    <div className="page">
      <div className="page-container">
        <Logo/>
        <Menu/>
        <Turbina/>

          <Audio2 />

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

// <div className="App"> {/* плеер */}
//           <Audio />
//         </div>