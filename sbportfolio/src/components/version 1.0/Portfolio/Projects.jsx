import React, { Component } from 'react'
import ProjectGrid from './ProjectGrid'
import ProjectList from './ProjectList'

export default class Projects extends Component {
    render() {
        if(this.props.view === 'grid'){
            return(
                <div className="cont-projects">
                    <ProjectGrid/>
                    <ProjectGrid/>
                    <ProjectGrid/>
                    <ProjectGrid/>
                    <ProjectGrid/>
                </div>
            )
        }else{
            return(
                <div className="cont-project-list">
                    <ProjectList/>
                    <ProjectList/>
                    <ProjectList/>
                    <ProjectList/>
                    <ProjectList/>
                </div>
            )
        }
    }
}
