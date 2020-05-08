import React, { Component } from "react"
import { FEED_QUERY } from "./ProjectList"
import { ApolloConsumer } from "react-apollo"

import gql from "graphql-tag"


// const UPDATE_MUTATION = gql `
// mutation UpdateProject($update: ProjectUpdateInput!, $where: ProjectWhereUniqueInput!){
//   updateProject(data: $update, where: $where){
//     projectName
//     description
//     id
//   }
// }

// `

// const FEED_QUERY = gql `
// query AllProjects {
//   projects {
//     id
//     projectName
//     description
//   }
// }
// `

export const DELETE_MUTATION = gql`
mutation removeProject($delete: ID!){
  deleteProject(where:{id:$delete}){
    id
  }
}
`





class RemoveProject extends Component {
    state = {
        projects: {
            id: ''

        }
    }

    handleDelete = (client) => async () => {
        const { id } = this.props
        await this.setState({ id: '' })
        await client.mutate({
            mutation: DELETE_MUTATION,
            variables: { id },
            update: this.handleUpdate
        })
    }

    handleUpdate = (cache, { data: { deleteProject } }) => {
        const { projects } = cache.readQuery({ query: FEED_QUERY })

        this.setState({ id: '' })

        if (deleteProject) {
            const removeProject = projects.findIndex((project) => project.id === deleteProject.id)
            projects.splice(removeProject, 1)


            cache.writeQuery({
                query: FEED_QUERY,
                data: { projects },
            })
        }
    }

    render() {
const { id } = this.state

        return (
            <ApolloConsumer>
                {(client) => {
                    return (
                        <div>
                            <button value={id} onClick={this.handleDelete(client)}>X</button>
                        </div>
                    )
                }}
            </ApolloConsumer>
        )
    }

}






export default RemoveProject