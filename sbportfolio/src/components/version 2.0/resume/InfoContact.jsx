import React, { Component } from 'react'

class InfoContact extends Component{
    render(){
        return <div className="info-contact">
            <span>
                <i class="far fa-envelope fa-lg icon-blue "></i>
                <a href="" className="link-disabled" >sambarberena@gmail.com</a>
            </span>
            <span>
                <i class="fas fa-phone-alt fa-lg icon-blue"></i>
                <a href="" className="link-disabled">+505 8645-9488</a>
            </span>
            <span>
                <i class="fab fa-linkedin fa-lg icon-blue"></i>
                <a href="https://www.linkedin.com/in/sambarfu/" target="_blank">https://www.linkedin.com/in/sambarfu/</a>
            </span>
        </div>
    }
}

export default InfoContact