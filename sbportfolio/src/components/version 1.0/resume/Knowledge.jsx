import React, { Component } from 'react';
//import circle from '../../img/Elipse 9.png'
import circle from '../../../img/Elipse 10.png'

class Knowledges extends Component {

    state = {
        level: []
    }

    circleFill(){
        return <img className="circle-level" src={circle} alt="."></img>
    }

    //agrega un componente circleFill al array level
    levelKnowledge(){  
        this.state.level = []                  
        for (let i = 0; i < this.props.level; i++) {
           this.state.level.push(this.circleFill())            
        }
        return this.state.level
    }

    render() {
        return <div className="knowledges">
            <h3 className="subtitle">{this.props.name}</h3>
            <span> 
                {
                    this.levelKnowledge().map( (val, i) => {
                        return val //retorna un componente circleFill
                    })
                }
            </span>
        </div>
    }
}

export default Knowledges