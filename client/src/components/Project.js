import React, { Component } from "react"


export default class Project extends Component {
    render(){
        return(
            <div>
                {this.props.name} ({this.props.description})
            </div>
        )
    }
}