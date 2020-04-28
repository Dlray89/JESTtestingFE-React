import React, { Component } from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import RecentProject from "./Recent_Project"
import { Typography, Card, Button } from "@material-ui/core"



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
         <Typography style={{textAlign:"center", margin:" 2% 0", textDecoration: "underline"}} variant="h5">
                Good Evening, David
            </Typography >
    <div style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", width:"50%", margin:"0 auto"}} >
        {projects.map(project =>
            
            <RecentProject key={project.id} project={project} />)}
    </div>
<div style={{textAlign:"center", margin:"2% 0 0 0", borderTop:"solid 1px #000f89"}}>
    <Typography variant="h4">THE HUB</Typography>
    <div style={{width:"85%", border:"solid 1px #000f89", display:"flex", justifyContent:"space-evenly", flexWrap:"wrap", padding:"5%", background:"#aeaeb1", margin:"2% auto"}}>
    
        <Card style={{width:"20%", border:"solid 1px #000f89", textAlign:"center"}}>
            <Typography variant="h6" >
                My Journal 
                <Typography>
                    create a entry of any inportant breakthrough
                </Typography>
                <Button variant="contained" color="primary">New Post</Button>
            </Typography>
        </Card>

        <Card style={{width:"20%", border:"solid 1px #000f89", textAlign:"center"}}>
            <Typography variant="h6">
                New Task
            </Typography>
            <Typography>
                Create a new task to make sure your project gets finished on time
            </Typography>
            <Button variant="contained" color="primary">New Task</Button>
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

export default Dashboard