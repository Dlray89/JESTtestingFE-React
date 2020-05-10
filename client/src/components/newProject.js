    //write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"
import {TextField, Button } from "@material-ui/core"

const POST_MUTATION = gql `
mutation NewProject($PN:String!, $des: String!, $TN: String!, $TD: String!) {
  createProject(data:{projectName:$PN, description:$des,tasks:{create:{taskName:$TN,taskDetails:$TD}}}){
    projectName
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
        PN: "",
        des: '',
        tasks:[{
            TN: "",
            TD:""
        }]
    }

    resetForm = e => {
        this.setState({ PN: "", des: ""})
    }

    render() {
        const { PN, des, TN, TD} = this.state
        return(
            <div >
                <div onSubmit={e => {e.preventDefault(); this.resetForm() }}>
                        <TextField 
                            value={PN}
                           style={{width:"100%"}}
                            onChange={e => this.setState({ PN: e.target.value})}
                            type="text"
                            placeholder="Project Name"
                        />
                        <br />
                        
                        <TextField 
                        variant="outlined"
                        multiline
                        rows={6}
                        style={{width:"100%", margin:"4% 0"}}
                            value={des}
                            onChange={e => this.setState({ des: e.target.value})}
                            type="text"
                            placeholder="Project details"
                        /> <br />
                           <TextField 
                        
                            value={TN}
                            variant="outlined"
                            onChange={e => this.setState({ TN: e.target.value})}
                            type="text"
                            placeholder="Task Name"
                        />
                           <TextField 
                       
                            value={TD}
                            variant="outlined"
                            onChange={e => this.setState({ TD: e.target.value})}
                            type="text"
                            placeholder="Task Details"
                        />
                        <br />
                      
                        <Mutation 
                         mutation={POST_MUTATION} 
                         variables={{ PN, des, TN, TD}}
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