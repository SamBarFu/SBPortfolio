import React, { Component } from 'react'
import logoToDo from '../../../assets/img/Grupo 162.png'

class Portfolio extends Component{
    render(){
        return <div className="container cont-portfolio">
            <div className="info-icon">
                <i class="fas fa-briefcase"></i>
                <h2>Briefcase</h2>
            </div>
            <div className="cont-project"> 
                <div className="card-project">
                    <img src={logoToDo} alt=""/>
                    <h3>ToDoList</h3>
                    <span className="icons-link">
                        <i class="fab fa-github"></i>
                        <i class="fas fa-globe-americas"></i>
                    </span>
                    <br/>
                    <span className="icons-code">
                        <i class="fab fa-python"></i>
                    </span>
                </div>

                <div className="card-project">
                    <img src={logoToDo} alt=""/>
                    <h3>ToDoList</h3>
                    <span className="icons-link">
                        <i class="fab fa-github"></i>
                        <i class="fas fa-globe-americas"></i>
                    </span>
                    <br/>
                    <span className="icons-code">
                        <i class="fab fa-python"></i>
                    </span>
                </div>

                <div className="card-project">
                    <img src={logoToDo} alt=""/>
                    <h3>ToDoList</h3>
                    <span className="icons-link">
                        <i class="fab fa-github"></i>
                        <i class="fas fa-globe-americas"></i>
                    </span>
                    <br/>
                    <span className="icons-code">
                        <i class="fab fa-python"></i>
                    </span>
                </div>

            </div>
            <button className="btn btn-primary">See more</button>
        </div>
    }
}

export default Portfolio