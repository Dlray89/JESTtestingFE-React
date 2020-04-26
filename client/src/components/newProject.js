//write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"

const POST_MUTATION = gql`
mutation addproject($projectName: projectName, $description: String!) {
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

    updateProjectName = ({ target: { value } }) => {
        this.setState({ projectName: value })
    }

    updateDescription = ({ target: { value } }) => {
        this.setState({ description: value })
    }

    resetForm = () => {
        this.setState({ projectName: "", description: "" })
    }

    render() {
        return (
            <div>
                <Mutation
                    mutation={POST_MUTATION}
                    refetchQueries={[
                        {
                            query: FEED_QUERY,
                            variables: { projectName: String, description: String }
                        }
                    ]}
                >
                    {(addProject, { loading, error }) => (


                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                addProject({
                                    variables: {
                                        project: {
                                            projectName: this.state.projectName,
                                            description: this.state.description
                                        }
                                    }
                                })


                                this.resetForm()
                            }}>
                            <input
                                value={this.state.projectName}
                                onChange={this.updateProjectName}
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                value={this.state.description}
                                onChange={this.updateDescription}
                                type="text"
                                placeholder="Project details"
                            />
                            <div>
                                <button>Add project</button>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error...</p>}
                            </div>


                        </form>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default NewProject