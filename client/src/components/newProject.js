//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"
import {TextField, Button } from "@material-ui/core"

const POST_MUTATION = gql `
mutation NewProject($newProject: String!, $newTask:String!){
  createProject(data:{projectName:$newProject,description:$newProject,tasks:{create:{taskName:$newTask, taskDetails:$newTask}}}){
    description
    tasks {
      taskName
      taskDetails
    }
  }
}
`

class NewProject extends Component {
    state = {
        projectName: "",
        description: '',
        tasks:[{
            taskName: "",
            taskDetails:""
        }]
    }

    resetForm = e => {
        this.setState({ projectName: "", description: ""})
    }

    render() {
        const { projectName, description, taskName, taskDetails} = this.state
        return(
            <div >
                <div onSubmit={e => {e.preventDefault(); this.resetForm() }}>
                        <TextField 
                            value={projectName}
                           style={{width:"100%"}}
                            onChange={e => this.setState({ projectName: e.target.value})}
                            type="text"
                            placeholder="Project Name"
                        />
                        <br />
                        
                        <TextField 
                        variant="outlined"
                        multiline
                        rows={6}
                        style={{width:"100%", margin:"4% 0"}}
                            value={description}
                            onChange={e => this.setState({ description: e.target.value})}
                            type="text"
                            placeholder="Project details"
                        /> <br />
                           <TextField 
                        
                            value={taskName}
                            variant="outlined"
                            onChange={e => this.setState({ taskName: e.target.value})}
                            type="text"
                            placeholder="Task Name"
                        />
                           <TextField 
                       
                            value={taskDetails}
                            variant="outlined"
                            onChange={e => this.setState({ taskDetails: e.target.value})}
                            type="text"
                            placeholder="Task Details"
                        />
                        <br />
                      
                        <Mutation 
                         mutation={POST_MUTATION} 
                         variables={{ newProject: {projectName:String, description:String}, newTask: {taskName:String, taskDetails:String} }}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: FEED_QUERY
                            }
                        ]}
                         >
                         
                        {postMutation => <Button style={{margin:"4% 0"}} variant="outlined" onClick={postMutation}>Create</Button>}
                        </Mutation>
                       
                </div>
            </div>
        )
    }
}

export default NewProject