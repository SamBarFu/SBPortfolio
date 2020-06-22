import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar.jsx'
import Resume from './components/resume/Resume.js'
import Portfolio from './components/Portfolio/portfolio.js'

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
