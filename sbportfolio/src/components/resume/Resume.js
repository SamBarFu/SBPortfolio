import React, { Component } from 'react'

//components import
import Info from './Info.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Knowledge from './Knowledge.jsx'
import Language from './Lenguages.jsx'

//assets import
import InfoResume from '../../InfoResume.json'
import photo from '../../img/sam-photo.jpg'

class Resume extends Component {

    constructor(props){
        super(props)
        this.infoResume=InfoResume
    }

    render() {      
        return <div className="cont-resume">
            <div className="resume-head">
                <div className="photo">
                    <img src={photo} alt="profile_photo"></img>
                </div>
                <div className="name">
                    <h1>{this.infoResume.name}<br/>{this.infoResume.last}</h1>
                    <h5><i> {this.infoResume.age} years</i></h5>
                </div>
            </div>
            <div className="resume-body">
                <Info />
                <About />                
                <div className="cont-education">
                    <h1 className="title">Education</h1>
                    <div>
                        {this.infoResume.education.map( (value, index) => {
                            return <Education name={value.name} school={value.school} lapse={value.lapse} key={index}/>
                        })}
                    </div>
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