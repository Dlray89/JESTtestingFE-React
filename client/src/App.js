import React, { Component } from 'react';
import './App.css';
import ProjectList from "./components/ProjectList"
import NewProject from "./components/newProject"

export default class App extends Component{
    render() {
        return(
            <div>
                 <ProjectList /> 
                 <NewProject />
            </div>
        )
    }
}
