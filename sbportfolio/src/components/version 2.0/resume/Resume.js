import React, { Component } from 'react'

/* components import */
import Header from './Header'
import About from './About'
import Education from './Education'
import Knowledge from './Knowledge'
import Experiencie from './WorkExperiencie'
import Portfolio from './Portfolio'
import Footer from '../Footer'

class Resume extends Component{
    render(){
        return <div>
            <Header/>
            <About/>
            <Education/>
            <Knowledge/>
            <Experiencie/>
            <Portfolio/>
            <Footer/>
        </div>
    }
}

export default Resume