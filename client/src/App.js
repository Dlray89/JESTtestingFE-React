import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import ProjectList from "./components/ProjectList"
import NewProject from "./tools/modal.js"
import Dashboard from "./components/dashboard"
import TaskList from "./tasks/taskList"
import Search from "./components/search"
import Navbar from "../src/tools/NavBAr"


export default class App extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/createproject" component={NewProject} />
                    <Route exact path="/projectlist" component={ProjectList} />
                    <Route exact path="/checklist" component={TaskList} />
                    <Route exact path="/search" component={Search} />
                </Switch>
                </>
                    
                   
                 
            </div>
        )
    }
}
