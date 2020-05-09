    //write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import {TASK_QUERY} from "./taskList"
import gql from "graphql-tag"

import AddBoxIcon from '@material-ui/icons/AddBox';import {TextField, Button, Typography} from "@material-ui/core"

const TASK_MUTATION = gql `
mutation CreateTask($newTask: TaskCreateInput!) {
  createTask(data: $newTask) {
    id
    taskName
    taskDetails
  }
}
`

class NewTasks extends Component {
    state = {
        taskName: "",
        taskDetails: ''
    }

    resetForm = e => {
        this.setState({ taskName: "", taskDetails: ""})
    }

    render() {
        const { taskName, taskDetails} = this.state
        return(
            <div >
                <div onSubmit={e => {e.preventDefault(); this.resetForm() }}>
                        <TextField 
                            style={{width: "100%", margin:"3% 0"}}
                            value={taskName}
                            variant="outlined"
                            onChange={e => this.setState({ taskName: e.target.value})}
                            type="text"
                            placeholder="Task Name"
                        />
                        <br />
                        <TextField 
                        style={{width: "100%", margin:"3% 0"}}

                        variant="outlined"
                        multiline
                        rows={4}
                            value={taskDetails}
                            onChange={e => this.setState({ taskDetails: e.target.value})}
                            type="text"
                            placeholder="Task details"
                        />
                        <br />
                        <Mutation 
                         mutation={TASK_MUTATION} 
                         variables={{ newTask: {taskName, taskDetails} }}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: TASK_QUERY
                            }
                        ]}
                         >
                        {postMutation => <Button  onClick={postMutation}>Create</Button>}
                        </Mutation>
                       
                </div>
            </div>
        )
    }
}

export default NewTasks