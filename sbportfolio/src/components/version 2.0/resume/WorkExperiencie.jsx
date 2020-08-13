import React, { Component } from 'react'

class WorkExperience extends Component{
    render(){
        return <div className="container cont-experience">
            <div className="info-icon">
                <i class="fas fa-code"></i>
                <h2>Work <br/> experience</h2>
            </div>
            <div className="info-experiencie">
                <div className="work">
                    <span><i class="far fa-building"></i>SamSoft (2015)</span>
                    <p><i>software developer</i></p>
                </div>
                <div className="work">
                    <span><i class="far fa-building"></i>Google (2019)</span>
                    <p><i>DevOps</i></p>
                </div>
                <div className="work">
                    <span><i class="far fa-building"></i>Entrevideo (2020)</span>
                    <p><i>Fullstack web developer</i></p>
                </div>
            </div>            
        </div>
    }
}

export default WorkExperience