/* import modules */ 
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

/* components imports */
/*import Navbar from './components/version 1.0/Navbar.jsx'
import Resume from './components/version 1.0/resume/Resume.js'
import Portfolio from './components/version 1.0/Portfolio/portfolio.js'*/

import Resume from './components/version 2.0/resume/Resume'

import './assets/css/style.css';

function App() {
  return (
    <div className="App">  
        <Resume/>    
      {/* <Router>
        <Navbar/>
        <Route exact path="/" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </Router> */}
    </div>
  );
}

export default App;
