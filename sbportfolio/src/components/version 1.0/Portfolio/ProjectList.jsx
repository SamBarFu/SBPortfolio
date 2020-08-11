import React, { Component } from 'react'
import DetailsProjectList from './DetailsProjectList'

export default class ProjectList extends Component {

    state = {
        showDetails: false,
        arrow: true
    }

    showDetails = () => {
        this.setState({arrow: !this.state.arrow})
        this.setState({showDetails: !this.state.showDetails})
    }

    showArrow(){
        if(this.state.arrow){
            return(
                <i onClick={this.showDetails} className="fas fa-chevron-down"></i>
            )
        }else{
            return(
                <i onClick={ this.showDetails } className="fas fa-chevron-up"></i>
            )
        }
    }
    
    render() {

        const underLine = {
            borderBottom: this.state.showDetails ? '2px solid #1B2F4C' : null
        }

        return (
            <div>
                <div className="list-project" style={underLine}>
                    <h2>Project 1</h2>
                    <span>
                        <i className="fab fa-github fa-lg"></i>
                        <i className="fas fa-globe-americas fa-lg"></i>
                    </span>
                    { this.showArrow() }                    
                </div>
                <div>
                    <DetailsProjectList show={ this.state.showDetails } text="proeject's description"/>
                </div>
            </div>
        )
    }
}
