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
                <i class="fas fa-circle fa-2x"></i>
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
            </span>
        </div>
    }
}

export default Knowledges