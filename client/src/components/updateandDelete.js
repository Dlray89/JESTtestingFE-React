import React, { Component } from "react"
import { FEED_QUERY } from "./ProjectList"
import { Mutation } from "react-apollo"


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
mutation Remove($id: ID!){
  deleteProject(where: {id:$id}) {
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

    handleDelete = id => {
    const newProjects = {...this.state.projects};
    newProjects.splice(id, 1);
    this.setState({ projects: newProjects });
  };

   render(){
       const { id } = this.state
       return(
           <div>
                <Mutation 
                         mutation={DELETE_MUTATION} 
                         variables={{ id }}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: FEED_QUERY
                            }
                        ]}
                         >
                         
                        {postMutation => <button value={id} style={{margin:"4% 0"}} variant="outlined" onClick={postMutation}>Remove</button>}
                        </Mutation>
                       
           </div>
       )
   }

}
export default RemoveProject