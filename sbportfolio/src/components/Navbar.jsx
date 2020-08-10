import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../img/SB-logoV2.png'

class Navbar extends Component {
    render(){
        return <div>
            <header className="navbar">
                <div className="nav-logo">
                <Link to="/"><img src={logo} className="img-logo" alt="logo_SB"/></Link>                    
                </div>
                <div className="nav-items">
                        <Link to="/"><i className="fas fa-id-badge"></i>Resume</Link>
                        <Link to="/portfolio"><i className="fas fa-briefcase"></i>Portfolio</Link>
                 </div>
            </header>
        </div>
    }
}

export default Navbar