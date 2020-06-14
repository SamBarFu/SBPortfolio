import React, { Component } from 'react';

class Resume extends Component {
    
    render(){
        return <div>
            <div className="cont-resume">
                <div className="resume-head">
                    <div className="logo">
                        <img>
                        </img>
                    </div>
                    <div className="name">
                        <p>Samuel Mohasir Barberena Fuentes</p>
                        <p>21 years</p>
                    </div>
                </div>
                <div className="resume-body">
                    <div className="info">
                        <div>
                            <p><span>sambarberena@gmail.com</span></p>
                            <p><span>+505 86459488</span></p>
                            <p><span> <a href="https://www.linkedin.com/in/sambarfu/">Linked</a> </span></p>
                        </div>
                    </div>
                    <div className="cont-about">
                        <div className="about">
                            <p>About me</p>
                            <p>I am an enthusiastic person in the activities that I do, I always give 
                                my best. I like to learn new things. when I work on the team i perform 
                                very well
                            </p>
                        </div>

                    </div>
                    <div className="cont-education">
                        <div className="education">
                            <p>Education</p>
                            <div className="cont-studies">
                                <div className="studies">
                                    <p>Elementary School</p>
                                    <p>Colegio Inmaculada Concepcion Fe y Alegria (CICFA)</p>
                                    <p>2007 - 2010</p>
                                </div>
                                <div className="studies">
                                    <p>High School</p>
                                    <p>Colegio Inmaculada Concepcion Fe y Alegria (CICFA)</p>
                                    <p>2011 - 2015</p>
                                </div>
                                <div className="studies">
                                    <p>Systems Engineering</p>
                                    <p>Universidad Nacional de Ingenieria</p>
                                    <p>2016 - present (5th)</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="cont-knowledges">
                        <div className="knowledges">
                            <div>
                                <p>HTML</p>
                                <div>
                                    <img src="" alt="..."></img>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="lenguages">
                        <div>
                            <div>
                                <p>English</p>
                                <div>
                                    <img src="" alt="..."></img>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Resume