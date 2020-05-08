import React, { Component} from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
// import Project from "./Project"
import { withStyles, Card, CardHeader, CardContent,CardActionArea, Typography } from "@material-ui/core"

const style = theme => ({
    root: {
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        margin: " 2% 0 2% 0"
    }
})

export const FEED_QUERY = gql `
query AllProjects {
  projects {
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
   
 render(){
    
    const{ classes} = this.props

        return(
            <Query query={FEED_QUERY}>
                {({ loading, error, data}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const projectData = data.projects
                 


                    return (
                        <div className={classes.root} style={{ width:"100%", border:'solid 2px red'}} >
                            {projectData.map((project) => 
                            <Card style={{border:"solid 2px green", width:"20%"}}>
                            <CardHeader title={project.projectName} subheader={project.description}/>
                              
                                
                                <CardContent>
                                    {project.tasks.map((task) => 
                                        <Typography variant={"body1"}>
                                           Task Name: <br/> 
                                           {task.taskName} <br/>
                                            Task Details: <br/>
                                             {task.taskDetails}
                                        </Typography>
                                        )}
                                </CardContent>
                            </Card>
                                
                            
                            )}

                        </div>
                    )

                }}
            </Query>
        )
    }
}

export default withStyles(style, {withTheme: true})(ProjectList)

