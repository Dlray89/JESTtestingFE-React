import React, { Component } from "react"
import {Card, withStyles } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
// 

const styles = theme => ({
    root: {
        margin: "2% 0 2% 0",
        border: "solid 1px black",
        width: "30%",
        textAlign: "center"
    }
})


class Project extends Component {
    state = {
        projects: {
            id: '',
            projectName: "",
            description: ""
        }
    }

    deleteHandler = id => {
        const projects = this.state.projects.filter(project => project.id !== id)
        this.setState({ projects: projects })
    }


    render() {

        const { classes } = this.props
        return (
            <Card className={classes.root} key={this.props.project.id}>
                <div style={{background:"#000f89", padding: "3%", color: "white"}}>
                    Project ID#: <br />
                    {this.props.project.id}<br />
                </div>

                ___________________________________<br />
                <div>
                    Project Name: <br />
                    {this.props.project.projectName} <br />
                </div>
                <div>
                    Project description: <br />
                    {this.props.project.description}
                    <br />
                </div>


                <button onChange={e => e.preventDefault()} onClick={this.deleteHandler} > <DeleteIcon /></button>
            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Project)