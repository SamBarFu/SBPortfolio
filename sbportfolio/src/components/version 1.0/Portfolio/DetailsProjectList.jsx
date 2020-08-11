import React, { Component } from 'react'
import Technologies from './Technologies'

export default class DetailsProjectList extends Component {
    render() {
        if(this.props.show){
            return (
                <div className="cont-details-project">
                    <div className="details">
                        <img src="https://via.placeholder.com/200x150" alt=""/>
                        <div className="info-project">
                            <span >
                                    <h3>project 1</h3>
                            </span>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae ipsam velit dolore exercitationem minus, dolor quasi sed reprehenderit minima pariatur ipsa, deleniti cumque doloremque eligendi blanditiis eaque omnis veniam?
                            </p>
                        </div>
                    </div>
                    <div>
                        <Technologies name="html" porcent="58"/>
                        <Technologies name="css" porcent="25"/>
                        <Technologies name="javascript" porcent="25"/>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}
