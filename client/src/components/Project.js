import React, { Component } from "react"
import {Card, withStyles, CardHeader} from "@material-ui/core"
import Delete from "../components/updateandDelete"
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
            <CardHeader  title={this.props.project.projectName} subheader={this.props.project.description} />
            <Delete />
            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Project)