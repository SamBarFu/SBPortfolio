import React, { Component } from 'react'
import logo from '../img/SB-logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Navbar extends Component {
    render(){
        return <div>
            <header className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo_SB"/>
                </div>
                <div className="nav-items">
                    <FontAwesomeIcon icon={faCoffee} />
                    <a href="#">Resume</a>
                    <a href="#">Portfolio</a>
                 </div>
            </header>
        </div>
    }
}

export default Navbar