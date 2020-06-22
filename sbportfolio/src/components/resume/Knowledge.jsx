import React, { Component } from 'react';
//import circle from '../../img/Elipse 9.png'
import circle from '../../img/Elipse 10.png'

class Knowledges extends Component {

    constructor(props){
        super(props)
        this.level = []
    }

    circleFill(){
        return <img className="circle-level" src={circle} alt="."></img>
    }

    //agrega un componente circleFill al array level
    levelKnowledge(){                    
        for (let i = 0; i < this.props.level; i++) {
           this.level.push(this.circleFill())            
        }
        return this.level
    }

    render() {
        return <div className="knowledges">
            <h3 className="subtitle">{this.props.name}</h3>
            <span> 
                {
                    this.levelKnowledge().map( (val, i) => {
                        return val
                    })
                }
            </span>
        </div>
    }
}

export default Knowledges