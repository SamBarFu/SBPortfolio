import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="card-project">
                <img src="https://via.placeholder.com/200x150" alt=""/>
                <h2>Project 1</h2>
                <span>
                    <i className="fab fa-github fa-lg"></i>
                    <i className="fab fa-twitter fa-lg"></i>
                </span>
            </div>
        )
    }
}
