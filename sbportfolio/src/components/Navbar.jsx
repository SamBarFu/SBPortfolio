import React, { Component } from 'react'
import logo from '../img/SB-logo.png'

class Navbar extends Component {
    render(){
        return <div>
            <header className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo_SB"/>
                </div>
                <div className="nav-items">
                    <a href="#"><i className="fas fa-id-badge"></i>Resume</a>
                    <a href="#"><i className="fas fa-briefcase"></i>Portfolio</a>
                 </div>
            </header>
        </div>
    }
}

export default Navbar