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

    deleteHandler = index =>{
        const newProjects = [...this.state.projects]
        newProjects.splice(index, 1)
        this.setState({ projects: newProjects})
    }


    render() {

        const { classes } = this.props
        return (
            <Card className={classes.root} key={this.props.project.id}>
            <CardHeader  title={this.props.project.projectName} subheader={this.props.project.description} />
            <Delete onDelete={this.deleteHandler} />
            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Project)