import React, { Component} from "react"
import { withApollo} from "react-apollo"
import gql from "graphql-tag"
import Project from "./Project"



const SEARCH_QUERY = gql `
query SearchAllQueries($search: ProjectWhereInput) {
  projects(where: $search) {
    projectName
    description
  }
}
`

class Search extends Component {

    state = {
        projects: [],
        filter: ""
    }

    resetform = e => {
        e.preventDefault()
        this.setState({filter:""})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.resetform}>
                    <input type="text" onChange={e => this.setState({ filter: e.target.value})}  />
                    <button onClick={() => this._executeSearch()}>Search</button>
                </form>
                {this.state.projects.map((project, index) => (
                    <Project key={project.id} project={project}  index={index}    />
                ))}
            </div>
        )
    }

    _executeSearch = async () => {
        const { search } = this.state
        const result = await this.props.client.query({
            query: SEARCH_QUERY,
            variables: { search },
        })
        const projects = result.data.projects
        this.setState({ projects })
    }
}

export default withApollo(Search)