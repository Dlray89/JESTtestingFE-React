//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"

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

    resetFrom = () => {
        this.setState({ projectName: "", description: ""})
    }
    render() {
        return (
            <div>
                <form onSubmit={e => {e.preventDefault(); this.resetFrom()}}>
                        <input 
                            value={projectName}
                            onChange={e => this.setState({ projectName: e.target.value})}
                            type="text"
                            placeholder="Name"
                        />
                        <input 
                            value={description}
                            onChange={e => this.setState({ description: e.target.value})}
                            type="text"
                            placeholder="Project details"
                            
                        />
                        <Mutation
                         mutation={POST_MUTATION} 
                         variables={{ newProject: {projectName, description} }}
                         
                        //  variables={{ projectName, description}}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: FEED_QUERY,
                                
                                
                            }

                        ]}
                         >
                        {postMutation => <button onClick={postMutation}>Submit</button>}
                        </Mutation>
                       
                </form>
            </div>
        )
    }
}

export default NewProject