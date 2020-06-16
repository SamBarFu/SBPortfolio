import React, { Component } from 'react'
import photo from '../../img/sam-photo.jpg'

import Info from './Info.js'
import About from './About.js'
import Education from './Education.js'
import Knowledge from './Knowledge.js'
import Language from './Lenguages.js'

class Resume extends Component {

    render() {
        return <div className="cont-resume">
            <div className="resume-head">
                <div className="photo">
                    <img src={photo} alt="profile_photo"></img>
                </div>
                <div className="name">
                    <h1>Samuel Mohasir<br/>Barberena Fuentes</h1>
                    <h5><i>21 years</i></h5>
                </div>
            </div>
            <div className="resume-body">
                <Info />
                <About />                
                <div className="cont-education">
                    <h1 className="title">Education</h1>
                    <Education name="Elementary School" school="Colegio Inmaculada Concepcion Fe y Alegria (CICFA)" lapse="2007 - 2010"/>
                    <Education name="High School" school="Colegio Inmaculada Concepcion Fe y Alegria (CICFA)" lapse="2011 - 2016"/>
                    <Education name="Systems Engineering" school="Universidad Nacional de Ingenieria" lapse="2016 - present (5th)"/>
                </div>
                <div>
                    <div className="cont-knowledges">
                        <h1 className="title">Knowledges</h1>
                        <Knowledge name="HTML" level="8"/>
                        <Knowledge name="HTML" level="8"/>
                    </div> 
                                       
                    <Language />
                </div>
            </div>
        </div>
    }
}

export default Resume