/* import modules */ 
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

/* components imports */
import Navbar from './components/Navbar.jsx'
import Resume from './components/resume/Resume.js'
import Portfolio from './components/Portfolio/portfolio.js'

import './App.css';

function App() {
  return (
    <div className="App">      
      <Router>
        <Navbar/>
        <Route exact path="/" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
