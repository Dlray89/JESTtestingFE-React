import React, { Component } from "react"
import {FEED_QUERY} from "./ProjectList"
import { Mutation} from "react-apollo"
import gql from "graphql-tag"

const REMOVE_MUTATION = gql `
mutation RemoveProject($deleteProject: ProjectWhereUniqueInput!){
  deleteProject(where: $deleteProject){
    id
    projectName
    description
    
  }
}
`
export default class RemoveProject extends Component {
    state = {
        id: "",
        projectName: "",
    description: ""
    }
    render(){
        const { id } = this.state
        return(
            <Mutation
             mutation={REMOVE_MUTATION}
             variables={{ deleteProject: { id } }}
             refetchQueries={[
                 {
                     query: FEED_QUERY
                 }
             ]}
             >
                {postMutation => 
                <button 
                value={this.state.id} 
                onClick={postMutation}>Submit</button>}
            </Mutation>
        ) 
    }
}