import React, { Component } from 'react';

class Education extends Component {
    render() {
        return <div className="cont-studies">
            <div className="studies">
                <p className="title1">{this.props.name}</p>
                <p className="subtitle1"><i>{this.props.school}</i></p>
                <p className="year">{this.props.lapse}</p>
            </div>
        </div>
    }
}

export default Education