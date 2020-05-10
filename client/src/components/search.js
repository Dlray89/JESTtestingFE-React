import React, { Component} from "react"
import { withApollo} from "react-apollo"
import gql from "graphql-tag"
import Project from "./Project"
import { TextField, Button, Card, CardHeader } from "@material-ui/core"



const SEARCH_QUERY = gql `
query Filtering($filter: String){
  projects(where: {projectName_contains:$filter}) {
    projectName
    description
    tasks {
        taskName
        taskDetails
    }
  
  }
}
`

class Search extends Component {

    state = {
        projects: [],
        filter: ""
    }

    resetform = e => {
        e.preventDefault()
        this.setState({filter:""})
    }
 
    render(){
        return(
            <div>
                <form style={{textAlign:"center", display:"flex", alignContent:"center", justifyContent:"center", margin:"5% 0" }} onSubmit={this.resetform}>


                    <TextField variant="outlined" style={{ width:"50%"}} type="text" onChange={e => this.setState({ filter: e.target.value})}  />

                    
                    <Button variant="outlined" onClick={() => this._executeSearch()}>Search</Button>
                </form>
                {this.state.projects.map((project, index) => (
                   <Card style={{border:"solid 1px blue", width:"30%", textAlign:"center"}} key={project.id}>
                   <CardHeader title={project.projectName} subheader={project.description} />
                    <br />
                
                   <div>    
                        {project.tasks.map((task) =>
                            <div>
                            <p>Task Name: <br/>{task.taskName}</p>
                            <p>Task Details: <br/>
                            {task.taskDetails}</p>
                            </div>
                            )}
                   </div>
                   </Card>
                ))}
            </div>
        )
    }

    _executeSearch = async () => {
        const { filter } = this.state
        const result = await this.props.client.query({
            query: SEARCH_QUERY,
            variables: { filter },
        })
        const projects = result.data.projects
        this.setState({ projects })
    }
}

export default withApollo(Search)