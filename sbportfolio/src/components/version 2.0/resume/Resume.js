import React, { Component } from 'react'

/* components import */
import Header from './Header'
import About from './About'
import Education from './Education'

class Resume extends Component{
    render(){
        return <div>
            <Header/>
            <About/>
            <Education/>
        </div>
    }
}

export default Resume