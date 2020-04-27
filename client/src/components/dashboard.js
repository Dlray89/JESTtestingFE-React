import React, { Component } from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import RecentProject from "./Recent_Project"
import { Card } from "@material-ui/core"



const SINGLE_PROJECT_QUERY = gql `
query {
  projects(last: 1) {
    id
    projectName
    description
  }
}
`
class Dashboard extends Component {

render(){
    return(
        <Query query={SINGLE_PROJECT_QUERY}   >
        {({ loading, error, data}) => {

            if(loading) return <p>Loading....</p>
            if(error) return <p>Error</p>

const projects = data.projects

return(
    <div>
         <Card>
                Welcome * User Name here
            </Card>
    <div style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", width:"50%", margin:"0 auto"}} >
        {projects.map(project =>
            
            <RecentProject key={project.id} project={project} />)}
    </div>
    </div>
)

        }}


        </Query>
    )
}
}

export default Dashboard