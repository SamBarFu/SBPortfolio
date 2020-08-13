import React, { Component } from 'react'

/* components import */
import Header from './Header'
import About from './About'
import Education from './Education'
import Knowledge from './Knowledge'
import Experiencie from './WorkExperiencie'

class Resume extends Component{
    render(){
        return <div>
            <Header/>
            <About/>
            <Education/>
            <Knowledge/>
            <Experiencie/>
        </div>
    }
}

export default Resume