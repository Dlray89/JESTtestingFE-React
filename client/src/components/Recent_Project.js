import React, { Component } from "react"
import { Card, CardHeader, withStyles, CardActionArea, Button, Typography } from "@material-ui/core"
// 

const styles = theme => ({
    root: {
        margin: "0 auto",
        border: "solid 1px black",
        width: "45%",
        textAlign: "center"
    },
    button: {
        margin: "4% 0"
    }
})


class RecentProject extends Component {
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
            <div style={{ width: "100%" }}>
                Most Recent project
            <Card  className={classes.root} key={this.props.project.id}>
                <CardHeader title={this.props.project.projectName} subheader={this.props.project.description} />
                <Typography variant="body1">
                    List of tasks** <br />
                    The last updated journal entry to this project

                </Typography>

                <CardActionArea><Button variant="outlined" color="primary" className={classes.button}>View More</Button></CardActionArea>
               
                </Card>

               

            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(RecentProject)