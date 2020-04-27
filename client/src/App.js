import React, { Component } from 'react';
import './App.css';
import ProjectList from "./components/ProjectList"
import NewProject from "./components/newProject"
import Navbar from "../src/tools/NavBAr"


export default class App extends Component{
    render() {
        return(
            <div>
                    <Navbar />
                    <NewProject />
                 <ProjectList /> 
                 
            </div>
        )
    }
}
