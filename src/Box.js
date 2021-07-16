import React, { Component } from 'react'
import './Box.css'

export default class Box extends Component {
    constructor (props) {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let boxColor = `rgb(${red}, ${green}, ${blue})`;
        super (props);
        this.state = {backgroundColor: boxColor};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

    }
    render() {
        return (
                <div className="Box" style={{backgroundColor: this.state.backgroundColor}} onClick={this.handleClick}></div>
        )
    }
}
