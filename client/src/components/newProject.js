//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"

const POST_MUTATION = gql `
mutation PostMutation($projectName: String!, $description: String!) {
    post(projectName: $projectName, description: $description) {
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

    render() {
        const { projectName, description} = this.state
        return(
            <div>
                <div>
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
                         variables={{ projectName, description}}
                        //  onCompleted={() => this.props.push()
                         update={(store, {data: { post } }) => {
                             const data = store.readQuery({ query: FEED_QUERY })
                             data.feed.projects.unShift(post)
                             store.writeQuery({
                                 query: FEED_QUERY,
                                 data
                             })
                         }}
                         >
                        {postMutation => <button onClick={postMutation}>Submit</button>}
                        </Mutation>
                       
                </div>
            </div>
        )
    }
}

export default NewProject