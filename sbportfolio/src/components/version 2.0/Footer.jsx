import React, { Component } from 'react'

class Footer extends Component{

    state = {
        date: new Date()
    }

    render(){
        return <footer>
            <div className="arrow-top">
                <p className="icon-arrow"><a href=".App">
                    <i class="fas fa-arrow-up fa-lg icon-dark"></i>                    
                </a></p>
                <p>TOP</p>
            </div>
            <div className="icons-redes">
                <i class="fab fa-github fa-lg icon-dark"></i>
                <i class="fab fa-twitter fa-lg icon-dark"></i>
                <i class="fab fa-instagram fa-lg icon-dark"></i>
                <i class="fab fa-facebook fa-lg icon-dark"></i>
            </div>
            <small>
                &copy; <a href="https://twitter.com/SamBarFu" target="_blank">SamSoft { this.state.date.getFullYear() }</a>
            </small>
        </footer>
    }
}

export default Footer