//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"

import AddBoxIcon from '@material-ui/icons/AddBox';import {TextField, Button, Typography,Card} from "@material-ui/core"
import ProjectList from "./ProjectList"

const POST_MUTATION = gql `
mutation NewProject($new: String!){
  createProject(data:{projectName:$new, description:$new,
    tasks:{create:{taskName:$new, taskDetails:$new}}}){
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

class NewProject extends Component {
    state = {
        projectName: "",
        description: '',
        tasks: {
            taskName: "",
            taskDetails:""
        }
    }

    resetForm = e => {
        this.setState({ projectName: "", description: ""})
    }

    render() {
        const { projectName, description, taskName, taskDetails} = this.state
        return(
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Card style={{textAlign:"center", background:"#aeaeb1", color: "white", width:"40%", margin:"2% auto", height:"70vh"}} onSubmit={e => {e.preventDefault(); this.resetForm() }}>

                <Typography style={{ color:"white", background:"#000f89", padding: "2%"}} variant="h5">
                    New Project
                </Typography>
                        <TextField 
                        style={{margin:" 2% auto", width:"60%", textAlign:"center", color:"#000f89"}}
                            value={projectName}
                            variant="outlined"
                            onChange={e => this.setState({ projectName: e.target.value})}
                            type="text"
                            placeholder="Name"
                        />
                        <br />
                        <TextField 
                        style={{width:"60%",margin:"2% 0"}}
                        variant="outlined"
                        multiline
                        rows={8}
                            value={description}
                            onChange={e => this.setState({ description: e.target.value})}
                            type="text"
                            placeholder="Project details"
                        />
                           <TextField 
                        style={{margin:" 2% auto", width:"60%", textAlign:"center", color:"#000f89"}}
                            value={taskName}
                            variant="outlined"
                            onChange={e => this.setState({ taskName: e.target.value})}
                            type="text"
                            placeholder="Task Name"
                        />
                           <TextField 
                        style={{margin:" 2% auto", width:"60%", textAlign:"center", color:"#000f89"}}
                            value={taskDetails}
                            variant="outlined"
                            onChange={e => this.setState({ taskDetails: e.target.value})}
                            type="text"
                            placeholder="Task Details"
                        />
                        <br />
                        <Mutation 
                         mutation={POST_MUTATION} 
                         variables={{ new: {projectName, description, taskName, taskDetails} }}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: FEED_QUERY
                            }
                        ]}
                         >
                         
                        {postMutation => <Button style={{background:"#000f89", color:"white"}} onClick={postMutation}><AddBoxIcon /></Button>}
                        </Mutation>
                       
                </Card>
                <ProjectList />
            </div>
        )
    }
}

export default NewProject