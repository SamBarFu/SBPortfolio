import React, { Component } from 'react';

import logo from '../../../assets/img/Recurso 1.png'
import photoPerfil from '../../../assets/img/sam-photo.jpg'

import InfoContact from './InfoContact'

class Header extends Component{
    render(){
        return <div>
            <div className="header">
                <div className="nav">
                    <img src={logo} alt="logo"/>
                    <i class="fas fa-bars fa-lg icon-blue"></i>
                </div>
                <div className="info-header">
                    <img src={photoPerfil} alt=""/>
                    <div className="info-personal">
                        <h1>Samuel Mohasir <br/> Barberena Fuentes</h1>
                        <h3> <i>21 years</i> </h3>
                        <div className="icons-redes">
                            <i class="fab fa-github fa-lg icon-blue"></i>
                            <i class="fab fa-twitter fa-lg icon-blue"></i>
                            <i class="fab fa-instagram fa-lg icon-blue"></i>
                            <i class="fab fa-facebook fa-lg icon-blue"></i>
                        </div>
                        <div className="buttons">
                            <button type="button" className="btn btn-primary">See portfolio</button>
                            <button type="button" className="btn btn-primary">See portfolio</button>
                        </div>
                        
                    </div>
                    <div className="cont-info-contact">
                        <InfoContact/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Header