//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"
import AddBoxIcon from '@material-ui/icons/AddBox';import {TextField, Button, Typography,Card} from "@material-ui/core"

const POST_MUTATION = gql `
mutation CreateProject($newProject: ProjectCreateInput!) {
  createProject(data: $newProject) {
    id
    projectName
    description
  }
}
`

class NewProject extends Component {
    state = {
        projectName: "",
        description: ''
    }

    resetForm = e => {
        this.setState({ projectName: "", description: ""})
    }

    render() {
        return (
            <div>
                <Card style={{textAlign:"center", background:"#A3C1AD", color: "white", width:"70%", margin:"2% auto"}} onSubmit={e => {e.preventDefault(); this.resetForm() }}>
                <Typography style={{ color:"white", background:"#000f89", padding: "3%"}} variant="h5">
                    New Project
                </Typography>
                        <TextField 
                        style={{margin:" 2% auto", width:"25%", textAlign:"center", color:"#000f89"}}
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
                        <br />
                        <Mutation 
                         mutation={POST_MUTATION} 
                         variables={{ newProject: {projectName, description} }}
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
            </div>
        )
    }
}

export default NewProject