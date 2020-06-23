import React, { Component } from 'react'

import logo from '../../img/SB-logoV3.png'
import Projects from './Projects.jsx'

export default class Portfolio extends Component {

    state = {
        view: 'list'
    }

    activeButtonGrid = (state) => {
        if(state === 'grid'){
            return {
                color: '#C13838'
            }
        } 
    }

    activeButtonList = (state) => {
        if(state === 'list'){
            return {
                color: '#C13838'
            }
        } 
    }

    render() {
        return (
            <div className="cont-portfolio">
                <div className="head-portfolio">
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="name">
                        <h1>Samuel Mohasir Barberena Fuentes</h1>
                        <h5><i> 21 years</i></h5>
                        <span>
                            <i className="fab fa-github fa-lg"></i>
                            <i className="fab fa-twitter fa-lg"></i>
                            <i className="fab fa-facebook fa-lg"></i>
                            <i className="fab fa-instagram fa-lg"></i>
                    </span>
                    </div>                    
                </div>
                <div className="body-portfolio">
                    <div className="title-portfolio">
                        <h1>My portfolio</h1>
                        <span>
                            <i onClick={ () => this.setState({view: 'list'}) } className="fas fa-list" style={this.activeButtonList(this.state.view)}></i>
                            <i onClick={ () => this.setState({view: 'grid'}) } className="fas fa-th-large" style={this.activeButtonGrid(this.state.view)}></i>
                        </span>                        
                    </div>
                    <hr/>
                    <div> 
                        <Projects view={this.state.view}/>
                    </div>
                </div>
            </div>
        )
    }
}
