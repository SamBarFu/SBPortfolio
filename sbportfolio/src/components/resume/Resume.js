import React, { Component } from 'react'

//components imports
import Info from './Info.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Knowledge from './Knowledge.jsx'

//assets imports
import InfoResume from '../../InfoResume.json'
import photo from '../../img/sam-photo.jpg'

class Resume extends Component {

    state = {
        infoResume: InfoResume
    }

    render() {      
        return <div className="cont-resume">
            <div className="resume-head">
                <div className="photo">
                    <img src={photo} alt="profile_photo"></img>
                </div>
                <div className="name">
                    <h1>{this.state.infoResume.name}<br/>{this.state.infoResume.last}</h1>
                    <h5><i> {this.state.infoResume.age} years</i></h5>
                </div>
            </div>
            <div className="resume-body">
                <Info />
                <About />                
                <div className="cont-education">
                    <h1 className="title">Education</h1>
                    {this.state.infoResume.education.map( (value, index) => {
                        return <Education name={value.name} school={value.school} lapse={value.lapse} key={index}/>
                    })}
                </div>
                <div>
                    <div className="cont-knowledges">
                        <h1 className="title">Knowledges</h1>
                        {this.state.infoResume.knowledge.map( (value, index) => {
                            return <Knowledge name={value.name} level={value.level} key={index}/>
                        })}
                    </div> 

                    <div className="cont-knowledges">
                        <h1 className="title">Languages</h1>
                        {this.state.infoResume.languages.map( (value, index) => {
                            return <Knowledge name={value.name} level={value.level} key={index}/>
                        })}
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Resume