import React, { Component } from "react"
import { Card, Typography, withStyles } from "@material-ui/core"


const styles = theme => ({
    root: {
        border: "solid 2px green",
        width: "40%",
        textAlign: "center",
      
    }
})

class Project extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { classes } = this.props
        return (
            <Card className={classes.root}>
                <Typography variant="h6"> 
                Project Name: <br />
                 {this.props.project.projectName}
                </Typography><br />
                <Typography variant="h6">
                    Project Details: <br />
                    {this.props.project.description}
                </Typography>


            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Project)