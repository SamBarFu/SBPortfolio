import React, { Component } from 'react'

export default class Technologies extends Component {

    render() {

        const porcent = {
            width: `${this.props.porcent}%`,
        }

        return (
            <div className="techno">
                <h4>{this.props.name}</h4> 
                <div className="cont-bar"><p className="bar" style={porcent}></p></div>
            </div>
        )
    }
}
