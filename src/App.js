import React from 'react';
import Articles from "./components/Articles.jsx";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <div className="page-container">
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
