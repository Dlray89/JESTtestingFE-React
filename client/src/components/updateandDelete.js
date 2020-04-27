import React, { Component } from "react"
import { Mutation, Query } from "react-apollo"

import gql from "graphql-tag"


const UPDATE_MUTATION = gql `
mutation UpdateProject($update: ProjectUpdateInput!, $where: ProjectWhereUniqueInput!){
  updateProject(data: $update, where: $where){
    projectName
    description
    id
  }
}

`

const FEED_QUERY = gql `
query AllProjects {
  projects {
    id
    projectName
    description
  }
}
`

// export const DELETE_MUTATION = gql `
// mutation DeleteProject($where: ProjectWhereUniqueInput!){
// 	deleteProject(where: $where){
//     id
//   }
// }
// `

const UpdateProject = () => (
<Query query={FEED_QUERY}>
{({ Loading, error, data}) => {


    if(Loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const ProjectsData = data.projects

    return ProjectsData.map(project => ({ id: type}) => {
        let input;

        return(

            <Mutation mutation={UPDATE_MUTATION} >
            {updateProject => (
                <div 
>
                    {type}
                    <form onSubmit={e => {
                        e.preventDefault()
                        updateProject({ variables: {id: input.value, type: input.value } })

                        input.value = ''
                    }}>
                    <div>
                
                    <input 
                    type="text"
                    ref={node => {
                        input = node;
                    }} />

                    <button>Update</button>
</div>
                    </form>
                </div>
            )}


            </Mutation>
        )
    })
}}


</Query>
)

export default UpdateProject