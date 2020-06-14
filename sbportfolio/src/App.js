import React from 'react';
import './components/css/Styles.css';

import Navbar from './components/Navbar.js'
import Resume from './components/Resume.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Resume/>
    </div>
  );
}

export default App;
