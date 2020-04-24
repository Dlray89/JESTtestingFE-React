import React, { Component } from "react"


export default class Project extends Component {
    render(){
        return(
            <div>
                {this.props.project.projectName} ({this.props.project.description})
            </div>
        )
    }
}