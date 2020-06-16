import React, { Component } from 'react';
import circle from '../../img/Elipse 9.png'
import circleFill from '../../img/Elipse 10.png'

class Knowledges extends Component {

    levelKnowledge(){                    
                    
    }

    render() {
        return <div className="knowledges">
            <h3 className="subtitle">{this.props.name}</h3>
            <span> 
                {this.levelKnowledge()}
            </span>
        </div>
    }
}

export default Knowledges