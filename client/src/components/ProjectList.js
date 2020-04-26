import React, { Component} from "react"
import { Query} from "react-apollo"
import Navbar from "./NavBar"
import gql from "graphql-tag"
import Project from "./Project"
import { Card, Typography, withStyles } from "@material-ui/core"

export const FEED_QUERY = gql `
query AllProjects {
  projects {
    id
    projectName
    description
  }
}
`
const styles = theme => ({
    root: {
        border: "solid 2px red",
        display: "flex",
        justifyContent: "space-evenly"
    }
})




class ProjectList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { classes } = this.props
    

        return(

            <div>
                <Navbar  />
            <Query query={FEED_QUERY}>
                {({ loading, error, data, projects}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const projectData = data.projects

                    return (
                        <div className={classes.root}>
                            {projectData.map(project =>
                            <div>
                        <Project key={project.id} project={project}  />
                        
                         </div>
                            
                            )}
                            
                        </div>
                    )

                }}
            </Query>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true})(ProjectList)

