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
            description: "",
            tasks: [{
                id: "",
                taskName: "",
                taskDetails:""
            }]
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
<<<<<<< HEAD
                <div style={{background:"#000f89", padding: "3%", color: "white"}}>
                    Project ID#: <br />
                    {this.props.project.id}<br />
                </div>

                
                <div>
                    Project Name: <br />
                    {this.props.project.projectName} <br />
                </div>
                _____________________________<br />
                <div>
                    Project description: <br />
                    {this.props.project.description}
                    <div key={this.props.project.tasks.id}>
                    {this.props.project.tasks}
                    </div>
                    
                    <br />
                    <br/>
                </div>


                <button onChange={e => e.preventDefault()} onClick={this.deleteHandler} > <DeleteIcon /></button>
=======
            <CardHeader  title={this.props.project.projectName} subheader={this.props.project.description} />
            <Delete />
>>>>>>> 168ce9e12cbeaf83789be01eccac6a73ed35b6d2
            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Project)