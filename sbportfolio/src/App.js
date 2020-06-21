import React from 'react';
import './App.css';

import Navbar from './components/Navbar.jsx'
import Resume from './components/resume/Resume.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Resume/>
    </div>
  );
}

export default App;
