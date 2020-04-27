import React, { Component} from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import Project from "./Project"
import { withStyles } from "@material-ui/core"

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
  }
}
`




console.log(FEED_QUERY)


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
                        <div className={classes.root} >
                        
                            {projectData.map(project => 
                       
                <Project key={project.id} project={project} 
                              />
                                
                            
                            )}

                        </div>
                    )

                }}
            </Query>
        )
    }
}

export default withStyles(style, {withTheme: true})(ProjectList)

