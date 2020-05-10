import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Query } from "react-apollo"
import gql from "graphql-tag"
// import RecentProject from "./Recent_Project"
import Clock from "../tools/clock"
import { Typography, Card, CardHeader, CardContent, CardActionArea, Button, withStyles } from "@material-ui/core"


const styles = theme => ({
    card: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        margin: "0 auto"
    },
    userTitle: {
        textAlign: "center",
        margin: " 2% 0",
        textDecoration: "underline"
    },
    Hub: {
        textAlign: "center",
        margin: "2% 0 0 0",
        borderTop: "solid 1px #000f89"
    },
    HubContent: {
        width: "85%",
        border: "solid 1px #000f89",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "5%",
        background: "#aeaeb1",
        margin: "2% auto"
    },
    HubJournal: {
        width: "20%",
        border: "solid 1px #000f89",
        textAlign: "center"
    },
    hubtask: {
        width: "20%",
        border: "solid 1px #000f89",
        textAlign: "center"
    },
    HubProject: {
         width: "20%",
        border: "solid 1px #000f89",
        textAlign: "center"
    }
})

const SINGLE_PROJECT_QUERY = gql`

query AllProjects {
  projects(last:1) {
    id
    projectName
    description
    tasks {
      id
      taskName
      taskDetails
    }
  }
  
}
`
class Dashboard extends Component {

    render() {

        const { classes } = this.props
        return (
            <Query query={SINGLE_PROJECT_QUERY}   >
                {({ loading, error, data }) => {

                    if (loading) return <p>Loading....</p>
                    if (error) return <p>Error</p>

                    const projects = data.projects

                    return (
                        <div>
                            <Typography className={classes.userTitle} variant="h5">
                                Good Evening, David
                            </Typography >

                            <div className={classes.card}  >
                                {projects.map((project) =>

                                <Card style={{border:'solid 1px blue'}}>
                                    
                                    <CardHeader title={project.projectName} subheader={project.description}  />
                                        {project.tasks.map((task) => 
                                            <CardContent>
                                                Task Name: <br />
                                                {task.taskName} <br/>
                                                Task Details: <br />{task.taskDetails}
                                            </CardContent>
                                            )}
                                    
                                </Card>  


                                    // <RecentProject key={project.id} project={project} />
                                    
                                    )}
                            </div>

                            <div className={classes.Hub} >
                                <Typography variant="h4">THE HUB</Typography>
                                <p><Clock /></p>

                                <div className={classes.HubContent} >

                                <Card className={classes.HubProject}>
                                    <CardHeader title="Start a Project" subheader="Thinking about a new project? Get started here" />
                                    <CardActionArea>
                                         <Button variant="outlined" color="primary"><Link to="/createproject">Create Project</Link></Button>
                                    </CardActionArea>
                                   
                                </Card>

                                    <Card className={classes.HubJournal}>

                                    <CardHeader title="My Journal" subheader="create a entry of any inportant breakthrough" />
                                        
                                    <CardActionArea>
                                         <Button className={classes.Buttons} variant="outlined" color="primary">New Post</Button>
                                    </CardActionArea>
                                        
                                    </Card>

                                    <Card className={classes.hubtask}>
                                    <CardHeader title="New Task" subheader="Create a new task to make sure your project gets finished on time" />
                                    <CardActionArea>
                                         <Button className={classes.Buttons} variant="outlined" color="primary">New Task</Button>
                                    </CardActionArea>
                                       
                                       
                                       
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )

                }}


            </Query>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Dashboard)