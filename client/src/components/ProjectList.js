import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
// import Project from "./Project"
import { withStyles, Card, CardHeader, CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import Delete from "./updateandDelete"


const style = theme => ({
    root: {
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:"2% auto",
         width:"70%", 
    },
    Card: {
        border:"solid 2px green", 
        width:"25%",
        margin: "2% auto"
    }
})

export const FEED_QUERY = gql`
query AllProjects {
  projects(last: 2) {
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



class ProjectList extends Component {

    render() {

        const { classes } = this.props

        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const projectData = data.projects
                 


                    return (
                        <div className={classes.root}  >
                            {projectData.map((project) => 
                            <Card  className={classes.Card}>
                           <CardHeader key={project.id} title={project.projectName} subheader={project.description}/>
                           
                              
                                
                                <CardContent>
                                    {project.tasks.map((task) => 
                                        <Typography  variant={"body1"}>
                                           Task Name: <br/> 
                                           {task.taskName} <br/>
                                            Task Details: <br/>
                                             {task.taskDetails}
                                        </Typography>
                                        )}
                                </CardContent>
                                <Link to={`/project/${project.id}`}><button key={project.id}>View More</button></Link>
                                <Delete key={`${project.id}`}/>
                            </Card>
                                
                            
                            )}

                        </div>
                    )

                }}


            </Query>
            
        )
    }
}

export default withStyles(style, { withTheme: true })(ProjectList)

