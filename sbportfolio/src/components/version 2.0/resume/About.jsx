import React, { Component } from 'react'

import aboutImg from '../../../assets/img/Grupo 63.png'

class About extends Component{
    render(){
        return <div className="container cont-about">
            <img src={aboutImg} alt="about icon"/>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ipsa non omnis recusandae, commodi odio alias totam. Qui beatae molestias, unde, alias velit quia aperiam labore commodi accusantium enim a?
            </p>
        </div>
    }
}

export default About